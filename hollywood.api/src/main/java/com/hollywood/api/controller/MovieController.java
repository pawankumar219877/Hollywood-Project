package com.hollywood.api.controller;

import com.hollywood.api.model.MovieModel;
import com.hollywood.api.model.request.MovieRequestBody;
import com.hollywood.api.service.MovieServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("hollywood/v1")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PATCH})
public class MovieController {
    @Autowired
    MovieServiceImpl movieService;

    // http://localhost:8081/hollywood/v1/movie
    @GetMapping("movie")
    public ResponseEntity<List<MovieModel>> getMoviesDetail() {
        List<MovieModel> movieList = movieService.getMoviesDetail();
        return new ResponseEntity<>(movieList, HttpStatus.OK);
    }

    // http://localhost:8081/hollywood/v1/movie
    @PostMapping("movie")
    public ResponseEntity<MovieModel> addMovie(@RequestBody MovieRequestBody movieRequestBody) {
        MovieModel movie = movieService.addMovie(movieRequestBody);
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }

    // http://localhost:8081/hollywood/v1/movie
    @PatchMapping("movie/{id}")
    public ResponseEntity<?> updateMovie(@PathVariable Long id, @RequestBody MovieRequestBody movieRequestBody) {
        movieService.updateMovie(id, movieRequestBody);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
