import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

const personalInfo = {
  name: "HOANH QUANG HUNG",
  title: "Full-Stack Developer",
  summary: "• Dedicated Back-end Developer with over 5 years of experience in .NET Core development.\n• 1+ year of experience in sub-lead position\n• Devops basic knowledge about Docker, Linux, Cloud, CI/CD\n• Committed to delivering high-quality work with a strong sense of responsibility and the ability to learn new technologies as required\n• Excellent teamwork skills and sociable personality\n• Intermediate English level(TOEIC ~680-730 in IIG test), N4 Japanese",
  email: "hoanhquanghung@gmail.com", 
  phone: "+84 123 456 789",
  location: "Hanoi, Vietnam",
  avatar: "/avatar.png"
};

const experiences = [
  {
    position: "Full-Stack Developer",
    company: "FPT Software",
    period: "2021 - Present",
    description: "Working on enterprise-level applications using modern technologies and best practices.",
    achievements: [
      "Developed and maintained multiple full-stack applications using React, Node.js, and cloud services",
      "Implemented microservices architecture for better scalability and maintainability",
      "Led a team of 3 developers in a critical project",
      "Reduced application load time by 40% through optimization techniques"
    ]
  },
  {
    position: "Frontend Developer",
    company: "Viettel Group",
    period: "2019 - 2021",
    description: "Focused on developing responsive and user-friendly web applications.",
    achievements: [
      "Built and maintained multiple client-facing applications",
      "Implemented modern UI/UX practices resulting in 30% better user engagement",
      "Developed reusable component library reducing development time by 25%"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Hanoi University of Science and Technology",
    period: "2015 - 2019",
    description: "Major in Computer Science",
    achievements: [
      "GPA: 3.5/4.0",
      "Active member of the University's Programming Club",
      "Won second place in the University's Programming Competition",
      "Completed multiple internships at leading tech companies"
    ]
  }
];

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Redux", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 95 }
    ]
  },
  {
    category: "Other Skills",
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Team Leadership", level: 85 },
      { name: "Agile/Scrum", level: 90 },
      { name: "English", level: 85 }
    ]
  }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      light: '#34495e',
      dark: '#1a252f',
    },
    secondary: {
      main: '#3498db',
      light: '#5dade2',
      dark: '#2980b9',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.5px',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '0.3px',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '0.2px',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.2px',
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e0e0e0',
        },
        bar: {
          borderRadius: 4,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header personalInfo={personalInfo} />
        <Education education={education} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
      </div>
    </ThemeProvider>
  );
}

export default App;
