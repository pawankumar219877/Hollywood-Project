package com.hollywood.api.model.transformer;


import com.hollywood.api.model.MovieModel;
import com.hollywood.api.model.request.MovieRequestBody;
import jakarta.persistence.Column;
import org.springframework.stereotype.Component;

@Component
public class Transformer {
    public MovieModel gerMovieModelForInsert(MovieRequestBody movieRequestBody) {
       return  new MovieModel(
               movieRequestBody.getTitle(),
               movieRequestBody.getDirectorName(),
               movieRequestBody.getReleasedAt());
    }
}
