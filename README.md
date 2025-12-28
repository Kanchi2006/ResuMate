# ResuMate – One‑Stop Resume Intelligence Platform
ResuMate is an AI‑powered web application designed to solve end‑to‑end resume problems for both **candidates** and **HR professionals**.  
It helps candidates build and analyze resumes, while enabling HRs to quickly screen and match suitable candidates based on job requirements.

This project was built as an **MVP for the Techsprint hackathon** with a clear focus on usability, AI integration, and clean system design.

## 🎯 Problem Statement
- Students struggle to create professional, ATS‑friendly resumes.
- Recruiters spend excessive time manually screening resumes.
- Existing tools are either resume‑only or recruiter‑only — not both.

## 💡 Solution
ResuMate acts as a **single platform** for:
- Resume creation & improvement (Candidate side)
- Resume screening & matching (HR side)

AI is used to:
- Generate resumes
- Analyze resume quality
- Match candidates with job requirements

## 👤 User Roles & Features

### 👨‍🎓 Candidate
- Build a resume from scratch using AI
- Get AI‑generated resume content
- Graceful error handling if AI fails (no UI crash)

### 🧑‍💼 HR / Recruiter
- Enter job requirements
- Automatically find matching candidates
- View AI‑generated summaries

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- HTML & CSS

### Backend
- Node.js
- Express.js

### AI Integration
- Google Gemini API

## 🧩 Project Structure
ResuMate/
├── client/ # React frontend
├── server/ # Node.js backend
├── README.md
└── .gitignore

Future Enhancements
1.Resume PDF upload & parsing

2.ATS score calculation

3.Authentication (login/signup)

4.Resume marketplace

5.Advanced filtering for HRs

Team:
Hephzibah Magizhini – Frontend Development

Kamakshi – Backend & AI Integration


## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/ResuMate.git
Start Backend
cd ResuMate
cd server
npm install
node index.js

Backend runs on:
http://localhost:5000

Start Frontend
cd client
npm install

Frontend runs on:
http://localhost:5173




npm run dev


