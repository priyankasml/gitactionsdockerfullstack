package com.klef.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "goal_table")
public class Goal {

    @Id
    private int id; // user-provided ID (not auto-generated)

    @Column(nullable = false, length = 100)
    private String title;

    @Column(length = 500)
    private String description;

    @Column(length = 50)
    private String category;

    @Column(nullable = false, length = 10)
    private String priority; // e.g. Low, Medium, High

    @Column(nullable = false, length = 20)
    private String status; // e.g. Not Started, In Progress, Completed

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    private int progress; // 0–100


    // --- Getters and Setters ---

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
}
