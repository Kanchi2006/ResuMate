import React, { useState } from "react";

export default function Candidate() {
  const [output, setOutput] = useState("Nothing yet");

  const buildResume = async () => {
    console.log("Button clicked ✅"); // 👈 DEBUG
    setOutput("Calling backend...");

    try {
      const res = await fetch("http://localhost:5000/build-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "John Doe",
          skills: "React, Node.js, AI",
          education: "B.Tech CSE"
        })
      });

      const data = await res.json();
      console.log("Backend response:", data); // 👈 DEBUG

      setOutput(data.generatedResume || "No response from backend");
    } catch (error) {
      console.error("Fetch error:", error);
      setOutput("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Candidate Dashboard</h2>

      <button onClick={buildResume}>
        Build Resume using AI
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {output}
      </pre>
    </div>
  );
}
