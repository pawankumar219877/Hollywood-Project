package com.hollywood.api.repository;

import com.hollywood.api.model.MovieModel;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;

@Repository
public interface MovieRepository extends JpaRepository<MovieModel, Long> {
    @Transactional
    @Modifying
    @Query("update MovieModel mm set mm.title = :title, " +
            " mm.directorName = :directorName, " +
            " mm.releasedAt = :releasedAt  where mm.id = :id")
    void updateMovie(@Param("title") String title,
                     @Param("directorName") String directorName,
                     @Param("releasedAt") LocalDate releasedAt,
                     @Param("id") Long id);
}
