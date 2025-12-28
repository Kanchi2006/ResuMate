import React, { useState } from "react";

export default function HR() {
  const [result, setResult] = useState("Nothing yet");

  const matchCandidates = async () => {
    console.log("HR button clicked ✅");
    setResult("Calling backend...");

    try {
      const res = await fetch("http://localhost:5000/match-resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobRequirements: "React, CSE, CGPA > 8",
          resumes: [
            "Candidate with React experience",
            "Candidate with Java background"
          ]
        })
      });

      const data = await res.json();
      console.log("HR backend response:", data);

      setResult(data.matchedCandidates || "No response");
    } catch (error) {
      console.error(error);
      setResult("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>HR Dashboard</h2>

      <button onClick={matchCandidates}>
        Find Matching Candidates
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}
