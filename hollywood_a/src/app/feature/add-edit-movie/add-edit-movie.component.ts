import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../model/Movie';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MovieStateService } from '../../services/movie-state.service';
import { GenericService } from '../../services/util/GenericService';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-movie',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-edit-movie.component.html',
  styleUrl: './add-edit-movie.component.css'
})

export class AddEditMovieComponent {
  movieForm: FormGroup;
  id: Number = 0;
  errorMessage: String = "";
  displayDate: String = "";

  public movie: Movie = {
    id: 0,
    title: "",
    directorName: "",
    releasedAt: ""
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private movieStateService: MovieStateService,
    private fb: FormBuilder,
    private genericService: GenericService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieStateService.getMoviesState().filter(m => m.id == this.id)[0] || this.movie;
    this.movieForm = this.fb.group({
      title: [this.movie.title, Validators.required],
      directorName: [this.movie.directorName, Validators.required],
      releasedAt: [this.movie.releasedAt, Validators.required]
    });

  }

  updateMovie(id: any, movie: Movie) {

  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const newMovie: Movie = {
        ...this.movieForm.value
      };

      if (this.id.valueOf() == 0) {
        this.movieService.addMovie(newMovie).subscribe({
          next: (response: Movie[]) => {
            console.log(`response = ${response}`);
          },
          error: (error) => {
            console.log(`error = ${error.error}`);
            this.errorMessage = error.error;
          },
          complete: () => {
            this.errorMessage = "";
            console.log(`completed`);
            this.router.navigate(['/']);
          },
        });
      } else if (this.id.valueOf() > 0) {
        this.movieService.updateMovie(this.id.valueOf(), newMovie).subscribe({
          next: (response: Movie[]) => {
            console.log(`response = ${response}`);
          },
          error: (error) => {
            console.log(`error = ${error.error}`);
            this.errorMessage = error.error;
          },
          complete: () => {
            this.errorMessage = "";
            console.log(`completed`);
            this.router.navigate(['/']);
          },
        });
      }

    }
  }
  get formControl() {
    return this.movieForm.controls;
  }

  formatDate(releasedAt: any) {
    if (releasedAt.value) {
      const formattedDate = new DatePipe('en-US').transform(releasedAt.value, 'MMM d, yyyy');
      this.displayDate = new String(formattedDate);
    } else {
      releasedAt.value = '';
    }
  }
}

