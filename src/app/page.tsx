// Install dependencies: npm install chart.js react-chartjs-2

"use client";

import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState('All');

  const projectData = [
    { name: 'General', budget: 100000, burnRate: 30000, status: 'In Development', people: 5, link: '#' },
     //{ name: 'Legacy Network', budget: 100000, burnRate: 30000, status: 'In Development', people: 5, link: '#' },
    // { name: 'Stutz', budget: 80000, burnRate: 80000, status: 'Completed', people: 3, link: '#' },
  //{ name: 'SkillBuddy', budget: 50000, burnRate: 20000, status: 'In Development', people: 12, link: '#' },
  //{ name: 'Welshare', budget: 50000, burnRate: 20000, status: 'In Development', people: 2, link: '#' },

    { name: 'Business Development', budget: 80000, burnRate: 80000, status: 'Completed', people: 3, link: '#' },
    { name: 'Development', budget: 50000, burnRate: 20000, status: 'In Development', people: 12, link: '#' },
    { name: 'Marketing', budget: 50000, burnRate: 20000, status: 'In Development', people: 2, link: '#' },
    { name: 'Design', budget: 5000, burnRate: 5000, status: 'In Development', people: 1, link: '#' },
    { name: 'Managment', budget: 50000, burnRate: 45000, status: 'In Development', people: 3, link: '#' },
    { name: 'Accounting', budget: 20000, burnRate: 20000, status: 'In Development', people: 1, link: '#' },
    { name: 'Legal', budget: 50000, burnRate: 20000, status: 'In Development', people: 1, link: '#' },
    { name: 'HR Recruitment', budget: 60000, burnRate: 20000, status: 'Planning', people: 1, link: '#' },
  ];

  //const filteredProjectData = selectedProject === 'All'
  //  ? projectData
  //  : projectData.filter(project => project.name === selectedProject);

  const chartData = {
  labels: projectData.map((project) => project.name),
  datasets: [
    {
      label: 'Budget (CHF)',
      data: projectData.map((project) => project.budget),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Burn Rate (CHF)',
      data: projectData.map((project) => project.burnRate),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};


  const projectTable = (
    <div style={{ backgroundColor: '#444', padding: '20px', borderRadius: '10px', color: '#fff' }}>
    <h2 style={{ marginBottom: '20px' }}>Project Overview</h2>

    <select
      value={selectedProject}
      onChange={(e) => setSelectedProject(e.target.value)}
      style={{ backgroundColor: '#555', color: '#fff', border: 'none', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}
    >
      <option value="All">All Projects</option>
      <option value="Legacy Network">Legacy Network</option>
      <option value="Stutz">Stutz</option>
      <option value="SkillBuddy">SkillBuddy</option>
      <option value="Welshare">Welshare</option>
    </select>

      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #555', padding: '10px' }}>Project Name</th>
            <th style={{ borderBottom: '1px solid #555', padding: '10px' }}>Budget (CHF)</th>
            <th style={{ borderBottom: '1px solid #555', padding: '10px' }}>Status</th>
            <th style={{ borderBottom: '1px solid #555', padding: '10px' }}>People</th>
            <th style={{ borderBottom: '1px solid #555', padding: '10px' }}>More Info</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((project, index) => (

            <tr key={index}>

              <td style={{ borderBottom: '1px solid #555', padding: '10px' }}>{project.name}</td>



              <td style={{ borderBottom: '1px solid #555', padding: '10px' }}>{project.budget}</td>
              <td style={{ borderBottom: '1px solid #555', padding: '10px' }}>{project.status}</td>
              <td style={{ borderBottom: '1px solid #555', padding: '10px' }}>{project.people}</td>
              <td style={{ borderBottom: '1px solid #555', padding: '10px' }}>
                <a href={project.link} style={{ color: '#61dafb' }}>Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <Bar
          data={chartData}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: 'white',
                },
              },
            },
            scales: {
              x: {
                ticks: { color: 'white' },
              },
              y: {
                ticks: { color: 'white' },
              },
            },
          }}
        />
      </div>
    </div>
  );

  const dashboardComponent = (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '2rem' }}>
          <span role="img" aria-label="heart">❤️❤️❤️❤️</span>
        </div>
        <h1 style={{ margin: '10px 0' }}>Runaway is 4 Months</h1>
      </div>

      <div style={{ backgroundColor: '#444', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>🔥 Burn rate</h2>
        <p>month: <strong>120000 CHF</strong></p>
        <p>day: <strong>4000 CHF</strong></p>
        <p>hour: <strong>500 CHF</strong></p>
      </div>

      <div style={{ backgroundColor: '#444', padding: '20px', borderRadius: '10px' }}>
        <Line data={chartData} options={{
          plugins: {
            legend: {
              labels: {
                color: 'white',
              },
            },
          },
          scales: {
            x: {
              ticks: { color: 'white' },
            },
            y: {
              ticks: { color: 'white' },
            },
          },
        }} />
      </div>
    </div>
  );



  const goalsComponent = (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      <div style={{ backgroundColor: '#FFDDC1', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2>📌 Daily Goals</h2>
        <ul>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={i}><input type="checkbox" />  Task {i + 1}</li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: '#C1FFD7', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2>✈️ Travel</h2>
        <ul>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={i}><input type="checkbox" /> Weekly Task {i + 1}</li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: '#FFC1F1', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2>⏰ Reminders</h2>
        <ul>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={i}><input type="checkbox" /> Monthly Task {i + 1}</li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: '#C1E1FF', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2>🗓️ Weekly Goals</h2>
        <ul>
          {['Setup meeting with Micheal Saylor', 'Apply to European funds', 'Release Legacy Update'].map((goal, i) => (
            <li key={i}><input type="checkbox" defaultChecked /> {goal}</li>
          ))}
        </ul>
      </div>
    </div>
    {/* Additional components for Daily and Monthly Goals */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
      <div style={{ backgroundColor: '#FFE4C1', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2>🌞 Personal Goals</h2>
        <ul>
          {['Morning Exercise', 'Review project updates', 'Prepare lunch', 'Read a chapter from a book'].map((goal, i) => (
            <li key={i}><input type="checkbox" /> {goal}</li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: '#C1D4FF', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2>📅 Reminders Goals</h2>
        <ul>
          {['Complete fitness challenge', 'Finish quarterly report', 'Plan next vacation', 'Learn a new skill'].map((goal, i) => (
            <li key={i}><input type="checkbox" /> {goal}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const peopleComponent = (
  <div style={{ padding: '30px', backgroundColor: '#333', borderRadius: '15px', color: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Saynode Company Directory</h2>

    <div style={{ marginBottom: '40px' }}>
      <h3 style={{ color: '#fff', marginBottom: '15px' }}>🧠 Management</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#444', borderRadius: '10px' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left' }}>Profile</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Role</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Responsibilities</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Projects</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Reports To</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Manages</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Salary Bracket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>
              {/* Example SVG for Ada Rivent */}
              <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#61dafb" />
                <text x="15" y="30" fontSize="18" fontWeight="bold" fill="#fff">AR</text>
              </svg>
            </td>
            <td style={{ padding: '10px' }}>Ada Rivent</td>
            <td style={{ padding: '10px' }}>Head of Management</td>
            <td style={{ padding: '10px' }}>Strategy, Operations, Leadership</td>
            <td style={{ padding: '10px' }}>General, Accounting</td>
            <td style={{ padding: '10px' }}>CEO</td>
            <td style={{ padding: '10px' }}>All Department Heads</td>
            <td style={{ padding: '10px' }}>CHF 120,000 - CHF 150,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h3 style={{ color: '#fff', marginBottom: '15px' }}>👥 HR</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#444', borderRadius: '10px' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left' }}>Profile</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Role</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Responsibilities</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Salary Bracket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>
              {/* Example SVG for Lisa Chan */}
              <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#ff6347" />
                <text x="15" y="30" fontSize="18" fontWeight="bold" fill="#fff">LC</text>
              </svg>
            </td>
            <td style={{ padding: '10px' }}>Lisa Chan</td>
            <td style={{ padding: '10px' }}>HR Specialist</td>
            <td style={{ padding: '10px' }}>Recruiting, Onboarding, Culture</td>
            <td style={{ padding: '10px' }}>CHF 70,000 - CHF 90,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 style={{ color: '#fff', marginBottom: '15px' }}>💻 Developers</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#444', borderRadius: '10px' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left' }}>Profile</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Role</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Responsibilities</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Reports To</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Manages</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Salary Bracket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>
              {/* Example SVG for Ivan Novak */}
              <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#4caf50" />
                <text x="15" y="30" fontSize="18" fontWeight="bold" fill="#fff">IN</text>
              </svg>
            </td>
            <td style={{ padding: '10px' }}>Ivan Novak</td>
            <td style={{ padding: '10px' }}>Senior Developer</td>
            <td style={{ padding: '10px' }}>Frontend, Backend, Deployment</td>
            <td style={{ padding: '10px' }}>CTO</td>
            <td style={{ padding: '10px' }}>Junior Devs</td>
            <td style={{ padding: '10px' }}>CHF 100,000 - CHF 130,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);




  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#333', color: '#fff', height: '100vh', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('dashboard')}
          style={{ backgroundColor: activeTab === 'dashboard' ? '#555' : '#444', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          style={{ backgroundColor: activeTab === 'projects' ? '#555' : '#444', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Projects
        </button>

        <button
          onClick={() => setActiveTab('goals')}
          style={{ backgroundColor: activeTab === 'goals' ? '#555' : '#444', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Goals
        </button>

        <button onClick={() => setActiveTab('people')}
        style={{ backgroundColor: activeTab === 'people' ? '#555' : '#444', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>People</button>
      </div>

      {activeTab === 'dashboard' && dashboardComponent}
      {activeTab === 'projects' && projectTable}
      {activeTab === 'goals' && goalsComponent}
      {activeTab === 'people' && peopleComponent}
    </div>
  );
}
