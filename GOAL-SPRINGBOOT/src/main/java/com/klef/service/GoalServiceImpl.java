package com.klef.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.klef.entity.Goal;
import com.klef.repository.GoalRepository;

@Service
public class GoalServiceImpl implements GoalService {
    @Autowired
    private GoalRepository repo;

    @Override
    public Goal addGoal(Goal goal) {
        return repo.save(goal);
    }

    @Override
    public List<Goal> getAllGoals() {
        return repo.findAll();
    }

    @Override
    public Goal getGoalById(int id) {
        Optional<Goal> opt = repo.findById(id);
        return opt.orElse(null);
    }

    @Override
    public Goal updateGoal(Goal goal) {
        return repo.save(goal);
    }

    @Override
    public void deleteGoalById(int id) {
        repo.deleteById(id);
    }
}
