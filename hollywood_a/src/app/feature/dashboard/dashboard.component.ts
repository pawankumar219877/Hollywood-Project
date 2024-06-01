import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GenericService } from '../../services/util/GenericService';
import { Movie } from '../../model/Movie';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieStateService } from '../../services/movie-state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

movies: Movie[]  = [];

constructor(private  movieService : MovieService, private movieStateService: MovieStateService){
}
ngOnInit(): void {
  this.getMovieList();
}

getMovieList(): void {
  this.movieService.getMovies().subscribe((data: Movie[]) => {
    this.movies = data;
    this.movieStateService.setMoviesState(this.movies);
  });
 }

}
