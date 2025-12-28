import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Candidate from "./pages/Candidate";
import HR from "./pages/HR";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/hr" element={<HR />} />
      </Routes>
    </BrowserRouter>
  );
}
