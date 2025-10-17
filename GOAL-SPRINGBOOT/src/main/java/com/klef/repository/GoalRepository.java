package com.klef.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.entity.Goal;

public interface GoalRepository extends JpaRepository<Goal, Integer> {
}
