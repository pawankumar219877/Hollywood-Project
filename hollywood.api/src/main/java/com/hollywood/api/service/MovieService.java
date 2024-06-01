package com.hollywood.api.service;

import com.hollywood.api.model.MovieModel;
import com.hollywood.api.model.request.MovieRequestBody;

import java.util.List;

public interface MovieService {
    public List<MovieModel> getMoviesDetail();
    public MovieModel addMovie(MovieRequestBody movieRequestBody);
    public void  updateMovie(Long id, MovieRequestBody movieRequestBody);
}
