package com.hollywood.api.service;

import com.hollywood.api.model.MovieModel;
import com.hollywood.api.model.request.MovieRequestBody;
import com.hollywood.api.model.transformer.Transformer;
import com.hollywood.api.repository.MovieRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    Transformer transformer;
    public List<MovieModel> getMoviesDetail() {
        return movieRepository.findAll();
    }
    public MovieModel addMovie(MovieRequestBody movieRequestBody) {
        MovieModel movieModel = transformer.gerMovieModelForInsert(movieRequestBody);
        return movieRepository.save(movieModel);
    }
    @Transactional
    public void updateMovie(Long id, MovieRequestBody movieRequestBody) {
        MovieModel movieModel = transformer.gerMovieModelForInsert(movieRequestBody);
        movieRepository.updateMovie(movieModel.getTitle(), movieModel.getDirectorName(), movieModel.getReleasedAt(), id);
    }
}
