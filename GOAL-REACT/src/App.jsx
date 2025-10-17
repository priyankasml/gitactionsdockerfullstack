import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./components/style.css";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

const App = () => {
  return (
    <Router>
      <div className="nav-bar">
        <h1 className="nav-heading">Goal Planner</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Add Goal</Link>
          <Link to="/goals" className="nav-link">View Goals</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<GoalForm />} />
        <Route path="/goals" element={<GoalList />} />
      </Routes>
    </Router>
  );
};

export default App;
