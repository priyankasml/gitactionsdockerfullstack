package com.klef.service;

import java.util.List;
import com.klef.entity.Goal;

public interface GoalService {
    Goal addGoal(Goal goal);
    List<Goal> getAllGoals();
    Goal getGoalById(int id);
    Goal updateGoal(Goal goal);
    void deleteGoalById(int id);
}
