import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieStateService {
  private movies: Movie[] = [];
  constructor() { }

  public getMoviesState(): Movie[] {
    return this.movies;
  }

  public setMoviesState(movies: Movie[]) {
    this.movies = movies;
  }
}
