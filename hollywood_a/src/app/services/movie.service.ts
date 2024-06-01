import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Movie } from '../model/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  updateMovieApiUrl: String = environment.serviceApiUrl + 'movie/:id';

  constructor(private http: HttpClient) { }


  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.serviceApiUrl}movie`);
  }

  public addMovie(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(`${environment.serviceApiUrl}movie`, data, { headers });
  }

  public updateMovie(id: any, movie: Movie) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.patch<any>(`${environment.serviceApiUrl}movie/${id}`, movie, { headers });
  }

}
