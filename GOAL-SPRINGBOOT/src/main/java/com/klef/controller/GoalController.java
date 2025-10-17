package com.klef.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.klef.entity.Goal;
import com.klef.service.GoalService;

@RestController
@RequestMapping("/goalapi")
@CrossOrigin(origins = "*")
public class GoalController {

    @Autowired
    private GoalService goalService;

    @GetMapping("/")
    public String home() {
        return "Goal Management API Running Successfully!";
    }

    @PostMapping("/add")
    public ResponseEntity<Goal> addGoal(@RequestBody Goal goal) {
        Goal saved = goalService.addGoal(goal);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Goal>> getAllGoals() {
        return new ResponseEntity<>(goalService.getAllGoals(), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getGoalById(@PathVariable int id) {
        Goal goal = goalService.getGoalById(id);
        if (goal != null)
            return new ResponseEntity<>(goal, HttpStatus.OK);
        return new ResponseEntity<>("Goal not found", HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateGoal(@RequestBody Goal goal) {
        Goal existing = goalService.getGoalById(goal.getId());
        if (existing != null) {
            return new ResponseEntity<>(goalService.updateGoal(goal), HttpStatus.OK);
        }
        return new ResponseEntity<>("Cannot update. Goal not found.", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteGoal(@PathVariable int id) {
        Goal existing = goalService.getGoalById(id);
        if (existing != null) {
            goalService.deleteGoalById(id);
            return new ResponseEntity<>("Goal deleted successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Cannot delete. Goal not found.", HttpStatus.NOT_FOUND);
    }
}
