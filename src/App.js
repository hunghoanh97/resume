import React from 'react';
import { Container, Grid, CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import DownloadButton from './components/DownloadButton';

function App() {
  // Personal Information
  const personalInfo = {
    name: "HOANH QUANG HUNG",
    title: "Software Engineer",
    email: "hoanhquanghung@gmail.com",
    phone: "+84 989 693842",
    location: "Hanoi, Vietnam",
    linkedin: "https://www.linkedin.com/in/hoanh-quang-hung-763297273/",
    github: "https://github.com/hunghoanh97",
    facebook: "https://www.facebook.com/hunghq97",
    website: "https://hunghoanh97.github.io/resume",
    summary: `Software Engineer with 5+ years building reliable, scalable services in .NET.
Over the past year, I have worked in a sub‑lead capacity, coaching teammates and
strengthening delivery with DevOps practices across Docker, Linux, and CI/CD.
I focus on clean architecture, performance, and maintainable code, and I collaborate
closely with stakeholders to deliver measurable outcomes.`,
    languages: [
      { name: 'English', level: 'Upper Intermediate (B2)' },
      { name: 'Japanese', level: 'Beginner (JLPT N4)' }
    ],
    hobbies: ['Running', 'Photography', 'Chess', 'Reading tech blogs']
  };

  // Profile
  const profile = [
    "• Dedicated Back-end Developer with over 5 years of experience in .NET Core development.\n",
    "• More than 1 year of experience in sub-lead position with knowledge in DevOps practices including Docker, Linux and CI/CD.\n",
    "• Committed to delivering high-quality work with a strong sense of responsibility and the ability to learn new technologies as required.\n",
    "• Excellent teamwork skills and sociable personality."
  ];

  // Skills
  const skills = [
    { category: "Programming Languages", items: ["C#", ".NET Core", "Python", "Truffle", "Java", "Solidity"] },
    { category: "Design Patterns", items: ["Repository Pattern", "UnitOfWork", "Clean Architecture", "MVC", "Domain Driven Design", "CQRS"] },
    { category: "Database", items: ["Oracle", "Postgres", "MS SQL Server", "MySQL"] },
    { category: "Version Control", items: ["Git", "SVN"] }
  ];

  // Work Experience
  const experiences = [
    {
      position: "Software Engineer",
      company: "CMC Technology Solutions",
      period: "01/2025 - Present",
      description: "Design and build cloud-native services and internal tools across .NET and React.",
      achievements: [
      ]
    },
    {
      position: "Back-end Developer",
      company: "FPT IS",
      period: "04/2024 - 12/2024",
      description: "Built and maintained enterprise back-end services in .NET and SQL.",
      achievements: [
      ]
    },
    {
      position: "Back-end Developer",
      company: "3S Intersoft",
      period: "12/2020 - 04/2024",
      description: "Developed APIs, integrations, and background jobs supporting core business workflows.",
      achievements: [
      ]
    },
    {
      position: "Back-end Developer",
      company: "FPT Hoa Lac",
      period: "01/2020 - 10/2020",
      description: "Contributed to back-end features and data models for internal applications.",
      achievements: [
      ]
    }
  ];

  // Education
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "FPT University",
      period: "2016 - 2020",
      description: "Coursework in algorithms, database systems, computer architecture, and software engineering.",
      english: "English: Upper Intermediate (TOEIC ~680-730)",
      japanese: "Japanese: JLPT N4",
      achievements: [
        "Capstone project evaluated by faculty with positive feedback.",
        "Completed bilingual coursework in English and Japanese."
      ]
    }
  ];

  // Projects
  const projects = [
    {
      name: "E-commerce Platform",
      period: "2019 - 2020",
      description: "A full-featured e-commerce platform with secure payment processing, inventory management, and analytics.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
      responsibilities: [
        "Implemented responsive front-end using React and Redux.",
        "Developed RESTful APIs for products, orders, and payments.",
        "Integrated Stripe securely for checkout and refunds.",
        "Containerized and deployed on AWS using Docker."
      ]
    },
    {
      name: "Healthcare Management System",
      period: "2018 - 2019",
      description: "A system for managing patient records, appointments, and billing with real-time notifications.",
      technologies: ["Angular", "Node.js", "Express", "PostgreSQL", "Socket.io", "Azure"],
      responsibilities: [
        "Led a small team to deliver features iteratively.",
        "Implemented real-time notifications using Socket.io.",
        "Designed and implemented the database schema.",
        "Integrated third-party APIs for insurance verification."
      ]
    },
    {
      name: "Personal Finance Tracker",
      period: "2017",
      description: "A mobile app to track expenses, budgets, and reports with data visualization.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      responsibilities: [
        "Developed the application from concept to deployment.",
        "Implemented charts and visualizations using Chart.js.",
        "Designed a responsive UI for both iOS and Android.",
        "Integrated Firebase for authentication and real-time database."
      ]
    }
  ];

  // Create a theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3498db',
        light: '#5dade2',
        dark: '#2980b9',
      },
      secondary: {
        main: '#2ecc71',
        light: '#58d68d',
        dark: '#27ae60',
      },
      background: {
        default: '#f5f8fa',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h5: {
        fontWeight: 600,
      },
      subtitle1: {
        fontWeight: 500,
        lineHeight: 1.6,
      },
      body1: {
        lineHeight: 1.75,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container id="cv-content" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh',
          gap: { xs: 3, md: 0 }
        }}>
          <Box sx={{ 
            width: { xs: '100%', md: '30%', lg: '25%' }, 
            mb: { xs: 3, md: 0 },
            height: { xs: 'auto', md: 'auto' }
          }}>
            <Sidebar personalInfo={personalInfo} education={education} />
          </Box>
          <Box sx={{ 
            width: { xs: '100%', md: '70%', lg: '75%' }, 
            pl: { xs: 0, md: 3 }
          }}>
            <MainContent 
              profile={profile} 
              experiences={experiences} 
              education={education} 
              projects={projects} 
              skills={skills} 
            />
          </Box>
        </Box>
      </Container>
      <DownloadButton />
    </ThemeProvider>
  );
}

export default App;
