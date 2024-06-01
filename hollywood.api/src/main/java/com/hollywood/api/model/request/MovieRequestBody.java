package com.hollywood.api.model.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MovieRequestBody {
    @NotNull
    String title;

    @NotEmpty
    String directorName;

    @NotEmpty
    LocalDate releasedAt;
}
