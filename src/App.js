import React from 'react';
import { Container, Grid, CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  // Personal Information
  const personalInfo = {
    name: "HOANH QUANG HUNG",
    title: "Software Engineer",
    email: "hoanhquanghung@gmail.com",
    phone: "+84 989 693842",
    location: "Ha Noi, VN",
    linkedin: "https://www.linkedin.com/in/hoanh-quang-hung-763297273/",
    github: "https://github.com/hunghoanh97",
    facebook: "https://www.facebook.com/hunghq97"
  };

  // Profile
  const profile = [
    "•Dedicated Back-end Developer with over 5 years of experience in .NET Core development.\n",
    "•More than 1 year of experience in sub-lead position with knowledge in DevOps practices including Docker, Linux and CI/CD.\n",
    "•Committed to delivering high-quality work with a strong sense of responsibility and the ability to learn new technologies as required.\n",
    "•Excellent teamwork skills and sociable personality."
  ];

  // Skills
  const skills = [
    "C#", ".NET Core", "SQL server", "Postgres", "Oracle",  
    "MongoDB", "MySQL", "AWS", "Docker", "Kubernetes", "CI/CD", 
    "ReactJs", "Agile/Scrum"
  ];

  // Work Experience
  const experiences = [
    {
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Lead developer for the company's flagship product, a SaaS platform serving over 500,000 users.",
      achievements: [
        "Architected and implemented a microservices-based backend that improved system reliability by 35%",
        "Led the migration from a monolithic architecture to a more scalable and maintainable codebase",
        "Mentored junior developers and conducted code reviews to ensure code quality",
        "Implemented CI/CD pipelines that reduced deployment time by 40%"
      ]
    },
    {
      position: "Software Engineer",
      company: "Digital Solutions LLC",
      period: "2017 - 2020",
      description: "Full-stack developer for various client projects in the finance and healthcare sectors.",
      achievements: [
        "Developed responsive web applications using React and Redux",
        "Created RESTful APIs using Node.js and Express",
        "Implemented authentication and authorization systems using JWT",
        "Optimized database queries that improved application performance by 25%"
      ]
    },
    {
      position: "Junior Developer",
      company: "WebTech Solutions",
      period: "2015 - 2017",
      description: "Worked on front-end development for e-commerce websites.",
      achievements: [
        "Built interactive UI components using JavaScript and jQuery",
        "Implemented responsive designs using CSS and Bootstrap",
        "Collaborated with designers to ensure pixel-perfect implementation",
        "Participated in daily stand-ups and sprint planning meetings"
      ]
    }
  ];

  // Education
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "FPT University",
      period: "2016 - 2020",
      description: "Focused on Computer Architecture and Software Systems",
      english : "Intermediate (TOEIC ~680-730)",
      japanese : "N4"
    }
  ];

  // Projects
  const projects = [
    {
      name: "E-commerce Platform",
      period: "2019 - 2020",
      description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "AWS"],
      responsibilities: [
        "Designed and implemented the front-end using React and Redux",
        "Developed RESTful APIs for product management and order processing",
        "Integrated Stripe for payment processing",
        "Deployed the application on AWS using Docker and Kubernetes"
      ]
    },
    {
      name: "Healthcare Management System",
      period: "2018 - 2019",
      description: "A comprehensive system for managing patient records, appointments, and billing for a network of clinics.",
      technologies: ["Angular", "Node.js", "Express", "PostgreSQL", "Socket.io", "Azure"],
      responsibilities: [
        "Led a team of 3 developers to build the application",
        "Implemented real-time notifications using Socket.io",
        "Designed and implemented the database schema",
        "Integrated with third-party APIs for insurance verification"
      ]
    },
    {
      name: "Personal Finance Tracker",
      period: "2017",
      description: "A mobile application for tracking personal expenses, creating budgets, and generating financial reports.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      responsibilities: [
        "Developed the entire application from concept to deployment",
        "Implemented data visualization using Chart.js",
        "Created a responsive UI that works on both iOS and Android",
        "Integrated with Firebase for authentication and real-time database"
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
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h5: {
        fontWeight: 600,
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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
    </ThemeProvider>
  );
}

export default App;
