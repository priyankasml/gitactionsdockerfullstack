import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "./config.js";
import "./style.css";

const GoalList = () => {
  const [goals, setGoals] = useState([]);
  const [message, setMessage] = useState("");
  const baseUrl = `${config.url}/goalapi`;
  const navigate = useNavigate();

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await axios.get(`${baseUrl}/all`);
      setGoals(res.data);
    } catch {
      setMessage("Error fetching goals.");
    }
  };

  const deleteGoal = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/delete/${id}`);
      setMessage(res.data);
      fetchGoals();
    } catch {
      setMessage("Error deleting goal.");
    }
  };

  const editGoal = (goal) => {
    navigate("/", { state: { goalToEdit: goal } });
  };

  return (
    <div className="student-container">
      {message && <div className="message-banner success">{message}</div>}
      <h2>All Goals</h2>
      {goals.length === 0 ? (
        <p>No goals found.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Title</th><th>Description</th><th>Category</th>
                <th>Priority</th><th>Status</th><th>Start</th><th>End</th><th>Progress</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((g) => (
                <tr key={g.id}>
                  <td>{g.id}</td>
                  <td>{g.title}</td>
                  <td>{g.description}</td>
                  <td>{g.category}</td>
                  <td>{g.priority}</td>
                  <td>{g.status}</td>
                  <td>{g.startDate}</td>
                  <td>{g.endDate}</td>
                  <td>{g.progress}%</td>
                  <td className="action-buttons">
                    <button className="btn-green" onClick={() => editGoal(g)}>Edit</button>
                    <button className="btn-red" onClick={() => deleteGoal(g.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GoalList;
