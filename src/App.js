import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import DownloadButton from './components/DownloadButton';

const personalInfo = {
  name: "HOANH QUANG HUNG",
  title: "Full-Stack Developer",
  email: "hoanhquanghung@gmail.com",
  phone: "+84 123 456 789",
  location: "Hanoi, Vietnam",
  avatar: `${process.env.PUBLIC_URL}/Avatar.png`,
  languages: [
    { name: "English", level: "Intermediate (TOEIC ~680-730)" },
    { name: "Japanese", level: "N4" }
  ],
  hobbies: [
    "Gym",
    "Swimming",
    "Billiard",
    "Traveling"
  ]
};

const skills = [
  "C#",
  ".NET Core",
  "SQL Database",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "React",
  "Linux/Unix Command line",
  "Python",
  "JAVA",
  "Docker",
  "AWS",
  "CI/CD",
  "Git"
];

const profile = `• Dedicated Back-end Developer with over 5 years of experience in .NET Core development.
• More than 1 year of experience in sub-lead position with knowledge in DevOps practices including Docker, Linux and CI/CD.
• Committed to delivering high-quality work with a strong sense of responsibility and the ability to learn new technologies as required.
• Excellent teamwork skills and sociable personality.`;

const experiences = [
  {
    position: "Full-Stack Developer",
    company: "CMC Technology Solutions",
    period: "1/2025 - Present",
    description: "Working on enterprise-level applications using .NET Core, React, and SQL Server.",
    achievements: [
      "Developed and maintained multiple full-stack applications using React, Node.js, and cloud services",
      "Implemented microservices architecture for better scalability and maintainability",
      "Led a team of 3 developers in a critical project",
      "Reduced application load time by 70% through optimization techniques"
    ]
  },
  {
    position: "Back-end Developer",
    company: "FPT IS",
    period: "4/2024 - 12/2024",
    description: "Working on enterprise-level applications using .NET Core, SQL Server, rabbitMQ, S3 bucket, and AWS services.",
    achievements: [
      "Developed a microservice for a large-scale enterprise application using .NET Core, SQL Server, and rabbitMQ",
      "Analyzed and optimized the performance of the application",
      "Documented the code and provided training to new developers"
    ]
  },
  {
    position: "Back-end Developer",
    company: "3S Intersoft",
    period: "1/2021 - 3/2024",
    description: "Working on enterprise-level applications using .NET Core, Oracle, PostgreSQL, MySQL, and Python.",
    achievements: [
      "Developed a microservice for a large-scale enterprise application using .NET Core, Oracle.",
      "Analyzed and optimized the performance of the application",
      "Documented the code and provided training to new developers"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "FPT University",
    period: "2015 - 2020",
    description: "Major in Software Engineering",
    achievements: [
    ]
  }
];

const projects = [
  {
    name: "Project Management System",
    period: "2023 - Present",
    description: "A comprehensive project management system for enterprise clients",
    technologies: [
      "Backend: .NET Core 7.0, SQL Server, Entity Framework Core",
      "Frontend: React, TypeScript, Material-UI",
      "DevOps: Docker, Azure DevOps, CI/CD",
      "Other: RabbitMQ, Redis, Azure Services"
    ],
    responsibilities: [
      "Led a team of 5 developers in developing and maintaining the system",
      "Implemented microservices architecture for better scalability",
      "Developed RESTful APIs and integrated with third-party services",
      "Optimized database queries and improved system performance by 40%"
    ]
  },
  {
    name: "E-commerce Platform",
    period: "2022 - 2023",
    description: "A full-featured e-commerce platform with payment integration",
    technologies: [
      "Backend: .NET Core 6.0, PostgreSQL, Dapper",
      "Frontend: React, Redux, Tailwind CSS",
      "DevOps: Docker, GitHub Actions",
      "Other: Stripe Payment, AWS S3, Elasticsearch"
    ],
    responsibilities: [
      "Developed core features including product management and order processing",
      "Implemented real-time inventory management system",
      "Integrated multiple payment gateways and shipping providers",
      "Reduced page load time by 60% through optimization"
    ]
  },
  {
    name: "HR Management System",
    period: "2021 - 2022",
    description: "An HR management system for large organizations",
    technologies: [
      "Backend: .NET Core 5.0, Oracle, Entity Framework",
      "Frontend: Angular, Bootstrap",
      "DevOps: Jenkins, SonarQube",
      "Other: SignalR, Azure AD"
    ],
    responsibilities: [
      "Developed employee management and attendance tracking modules",
      "Implemented real-time notifications using SignalR",
      "Created comprehensive reporting system",
      "Achieved 95% test coverage through unit and integration testing"
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
      <Box id="cv-content" sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar personalInfo={personalInfo} />
        <MainContent 
          profile={profile}
          experiences={experiences}
          education={education}
          projects={projects}
          skills={skills}
        />
      </Box>
      <DownloadButton />
    </ThemeProvider>
  );
}

export default App;
