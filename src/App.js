import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage";
import { MentorPage } from "./pages/MentorPage/MentorPage";

function App() {
  // Renk opsiyonlari
  // #e9182b
  // #cc0000
  // #b70202 ok
  // #5e5e5e gray

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/profile" element={<MentorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
