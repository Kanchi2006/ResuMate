import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>ResuMate</h1>
      <p>One‑Stop Resume Intelligence Platform</p>

      <button onClick={() => navigate("/candidate")}>
        Login as Candidate
      </button>

      <br /><br />

      <button onClick={() => navigate("/hr")}>
        Login as HR
      </button>
    </div>
  );
}
