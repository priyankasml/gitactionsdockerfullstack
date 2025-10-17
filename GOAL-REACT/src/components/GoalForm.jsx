import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "./config.js";
import "./style.css";

const GoalForm = () => {
  const location = useLocation();
  const editGoal = location.state?.goalToEdit;

  const [goal, setGoal] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    priority: "",
    status: "",
    startDate: "",
    endDate: "",
    progress: ""
  });
  const [message, setMessage] = useState("");
  const [editMode, setEditMode] = useState(false);
  const baseUrl = `${config.url}/goalapi`;

  useEffect(() => {
    if (editGoal) {
      setGoal(editGoal);
      setEditMode(true);
    }
  }, [editGoal]);

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    for (let key in goal) {
      if (!goal[key] || goal[key].toString().trim() === "") {
        setMessage(`Please fill out the ${key} field.`);
        return false;
      }
    }
    return true;
  };

  const addGoal = async () => {
    if (!validateForm()) return;
    try {
      await axios.post(`${baseUrl}/add`, goal);
      setMessage("Goal added successfully!");
      resetForm();
    } catch {
      setMessage("Error adding goal.");
    }
  };

  const updateGoal = async () => {
    if (!validateForm()) return;
    try {
      await axios.put(`${baseUrl}/update`, goal);
      setMessage("Goal updated successfully!");
      resetForm();
    } catch {
      setMessage("Error updating goal.");
    }
  };

  const resetForm = () => {
    setGoal({
      id: "",
      title: "",
      description: "",
      category: "",
      priority: "",
      status: "",
      startDate: "",
      endDate: "",
      progress: ""
    });
    setEditMode(false);
  };

  return (
    <div className="student-container">
      {message && <div className="message-banner success">{message}</div>}
      <h2>{editMode ? "Edit Goal" : "Add New Goal"}</h2>

      <div className="form-grid">
        <input type="number" name="id" placeholder="Goal ID" value={goal.id} onChange={handleChange} disabled={editMode} />
        <input type="text" name="title" placeholder="Title" value={goal.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={goal.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={goal.category} onChange={handleChange} />
        <select name="priority" value={goal.priority} onChange={handleChange}>
          <option value="">Select Priority</option>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
        <select name="status" value={goal.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option>Not Started</option><option>In Progress</option><option>Completed</option>
        </select>
        <input type="date" name="startDate" value={goal.startDate} onChange={handleChange} />
        <input type="date" name="endDate" value={goal.endDate} onChange={handleChange} />
        <input type="number" name="progress" placeholder="Progress %" value={goal.progress} onChange={handleChange} />
      </div>

      <div className="btn-group">
        {!editMode ? (
          <button className="btn-blue" onClick={addGoal}>Add Goal</button>
        ) : (
          <>
            <button className="btn-green" onClick={updateGoal}>Update Goal</button>
            <button className="btn-gray" onClick={resetForm}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default GoalForm;
