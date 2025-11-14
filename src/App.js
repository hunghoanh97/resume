import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
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
      { name: 'English', level: 'Intermediate (B2)' },
      { name: 'Japanese', level: 'Lower Intermediate (JLPT N4)' }
    ],
    hobbies: ['Gymnastics', 'Billiards', 'Reading tech blogs']
  };

  // Profile
  const profile = [
    "• Dedicated Back-end Developer with over 5 years of experience in .NET Core development.\n",
    "• 2 years of experience in a leadership role with solid knowledge of DevOps practices including Docker, Linux, and CI/CD.\n",
    "• Strong sense of responsibility, committed to delivering high-quality work, and quick to adapt to new technologies.\n",
    "• Excellent team player with a sociable and proactive personality."
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
      description: "Maintain, design and build Micro services and internal tools across .NET and React.",
      achievements: [
      ]
    },
    {
      position: "Back-end Developer",
      company: "FPT IS",
      period: "04/2024 - 12/2024",
      description: "Architected and implemented scalable microservices for enterprise applications using .NET Core and SQL Server.",
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
      name: "C-Contract",
      period: "1/2025 - Present",
      description: "A digital contract platform that enables secure, paperless signing and management of contracts for businesses.",
      Customer: "TP-Bank, Masan, Pepsi",
      technologies: [".Net", "React", "PostgreSQL", "Redis", "RabbitMQ"],
      responsibilities: [
        "Implemented responsive front-end using React and Redux.",
        "Developed RESTful APIs for products, digital signatures, and payments.",
        "Customize and integrate the system for each individual client."
      ]
    },
    {
      name: "PeopleX",
      period: "04/2024 - 11/2024",
      description: "A comprehensive digital ecosystem that transforms human resource management solutions, enhancing employee experience and organizational efficiency.",
      Customer: "FPT and global partner",
      teamSize: 200,
      position: "Back-end Developer",
      technologies: [".NET Core 8.0", "SQL Server", "MongoDB", "Redis", "RabbitMQ", "AWS S3"],
      responsibilities: [
        "Position: Back-end Developer",
        "Develop, maintain in modules (Timesheet, HRM, Report, etc).",
      ]
    },
    {
      name: "3S Media",
      period: "06/2023 - 01/2024",
      description: "Manage records and revenue from various platforms for artists connected with 3S.",
      Customer: "Artists, musicians",
      teamSize: 8,
      position: "Maintainer - Back-end Developer",
      technologies: [".NET Core 6.0", "PostgreSQL"],
      responsibilities: [
        "Team size: 8",
        "Position: Maintainer - Back-end Developer",
        "Develop specific modules.",
        "DevOps tasks.",
        "Applied UnitOfWork, Repository, CQRS, and DDD."
      ]
    },
    {
      name: "EVN System Integration",
      period: "01/2022 - 12/2023",
      description: "Business website with 13 modules for EVN Ha Noi NPC and 30 Hanoi Electric Units.",
      Customer: "EVN",
      teamSize: "50+",
      position: "Back-end Developer; Team Lead of 2 modules",
      technologies: [".NET Core 5.0", "Oracle"],
      responsibilities: [
        "Team size: 50+",
        "Position: Back-end Developer; Team Lead of 2 modules",
        "Develop specific modules.",
        "DevOps tasks.",
        "Requirements analysis with customer.",
        "Applied UnitOfWork, Repository, CQRS, and DDD."
      ]
    },
    {
      name: "WinEco Farm",
      period: "03/2023 - 07/2023",
      description: "Manage materials, employees, and reports for WinEco Farm.",
      Customer: "Winmart",
      teamSize: 7,
      position: "Maintainer - Back-end Developer",
      technologies: [".NET Core 2.0", "MySQL"],
      responsibilities: [
        "Team size: 7",
        "Position: Maintainer - Back-end Developer",
        "Develop specific modules.",
        "DevOps tasks.",
        "Applied UnitOfWork, Repository, CQRS, and DDD."
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
