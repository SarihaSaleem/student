// src/App.jsx
import React from 'react';
import StudentCard from './components/StudentCard';
import { activeStudents, alumni } from './data/students';
import './index.css';

function mostCommonSkill(allStudents) {
  const counts = {};
  allStudents.forEach(s => {
    s.skills.forEach(skill => {
      const k = skill.toLowerCase();
      counts[k] = (counts[k] || 0) + 1;
    });
  });
  const entries = Object.entries(counts);
  if (!entries.length) return 'N/A';
  entries.sort((a,b) => b[1] - a[1]);
  return entries[0][0]; // lowercased; you can format if needed
}

export default function App() {
  const all = [...activeStudents, ...alumni];
  const total = all.length;
  const activeCount = activeStudents.length;
  const alumniCount = alumni.length;
  const commonSkill = mostCommonSkill(all);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <section className="stats">
        <h2>Directory Statistics</h2>
        <p>Total students: <strong>{total}</strong></p>
        <p>Active: <strong>{activeCount}</strong> | Alumni: <strong>{alumniCount}</strong></p>
        <p>Most common skill: <strong>{commonSkill}</strong></p>
      </section>

      <section>
        <h2>Active Students</h2>
        <div className="list">
          {activeStudents.map(student => (
            <StudentCard
              key={student.rollNumber}
              {...student}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Alumni</h2>
        <div className="list">
          {alumni.map(student => (
            <StudentCard
              key={student.rollNumber}
              {...student}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>XYZ Institute — Full Stack Development</p>
        <p>Contact: directory@xyz.edu</p>
        <p>© {new Date().getFullYear()} Student Portal</p>
      </footer>
    </div>
  );
}
