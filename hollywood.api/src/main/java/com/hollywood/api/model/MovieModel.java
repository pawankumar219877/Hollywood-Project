package com.hollywood.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@Entity
@Table(name = "movies")
@NoArgsConstructor
public class MovieModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "title")
    String title;

    @Column(name = "directorName")
    String directorName;

    @Column(name = "releasedAt")
    LocalDate releasedAt;
    public MovieModel(String title, String directorName, LocalDate releasedAt) {
        this.title = title;
        this.directorName = directorName;
        this.releasedAt = releasedAt;
    }

}
