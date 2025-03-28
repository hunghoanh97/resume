import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const personalInfo = {
  name: "HOANH QUANG HUNG",
  title: "Full-Stack Developer",
  email: "hoanhquanghung@gmail.com",
  phone: "+84 123 456 789",
  location: "Hanoi, Vietnam",
  avatar: `${process.env.PUBLIC_URL}/Avatar.png`,
  skills: [
    "SQL Database Management",
    "Linux/Unix Command line",
    "Python",
    "C++",
    "JAVA",
    ".NET Core",
    "React",
    "Node.js"
  ],
  languages: [
    { name: "English", level: "Intermediate (TOEIC ~680-730)" },
    { name: "Japanese", level: "N4" }
  ],
  hobbies: [
    "Reading",
    "Swimming",
    "Playing Guitar"
  ]
};

const profile = `Dedicated Back-end Developer with over 5 years of experience in .NET Core development. 
1+ year of experience in sub-lead position with strong knowledge in DevOps practices including Docker, Linux, Cloud, and CI/CD. 
Committed to delivering high-quality work with a strong sense of responsibility and the ability to learn new technologies as required. 
Excellent teamwork skills and sociable personality.`;

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

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50',
      light: '#34495E',
      dark: '#2C3E50',
    },
    secondary: {
      main: '#64B5F6',
      light: '#90CAF9',
      dark: '#42A5F5',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
      letterSpacing: 0.5,
    },
    h6: {
      fontWeight: 500,
      letterSpacing: 0.3,
    },
    subtitle1: {
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#E0E0E0',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar personalInfo={personalInfo} />
        <MainContent 
          profile={profile}
          education={education}
          experiences={experiences}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
