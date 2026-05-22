import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./register"; // ✅ import from the new file

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
