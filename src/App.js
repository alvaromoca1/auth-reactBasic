import './App.css';
import React from "react";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" caseSensitive={false} element={<Login />}/>
          <Route path="/register" caseSensitive={false} element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
