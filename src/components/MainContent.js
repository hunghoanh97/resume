import React from 'react';
import { Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const MainContent = ({ profile, experiences, education, projects, skills }) => {
  return (
    <Box sx={{ p: 4, flexGrow: 1, bgcolor: 'white' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        PROFILE
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4,
          whiteSpace: 'pre-line',
          '& > p': {
            mb: 2,
            '&:last-child': {
              mb: 0
            }
          }
        }}
      >
        {profile}
      </Typography>

      <Typography variant="h5" sx={{ mb: 2 }}>
        SKILLS
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        {skills.map((skill, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              bgcolor: 'primary.light',
              color: 'white',
              px: 2,
              py: 1,
              borderRadius: 1,
              fontWeight: 500,
            }}
          >
            {skill}
          </Typography>
        ))}
      </Box>

      <Typography variant="h5" sx={{ mb: 2 }}>
        WORK EXPERIENCE
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">{exp.position}</Typography>
            <Typography variant="body1">{exp.period}</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
            {exp.company}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {exp.description}
          </Typography>
          <ul>
            {exp.achievements.map((achievement, i) => (
              <li key={i}>
                <Typography variant="body1">{achievement}</Typography>
              </li>
            ))}
          </ul>
          {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}

      <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
        PROJECTS
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4, boxShadow: 1 }}>
        <Table>
          <TableBody>
            {projects.map((project, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ 
                    borderBottom: index < projects.length - 1 ? '1px solid #e0e0e0' : 'none',
                    py: 2
                  }}>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6">{project.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{project.period}</Typography>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main' }}>
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'white',
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main' }}>
                        Responsibilities:
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {project.responsibilities.map((resp, i) => (
                          <li key={i}>
                            <Typography variant="body2">{resp}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
        EDUCATION
      </Typography>
      {education.map((edu, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">{edu.degree}</Typography>
            <Typography variant="body1">{edu.period}</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
            {edu.school}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {edu.description}
          </Typography>
          <ul>
            {edu.achievements.map((achievement, i) => (
              <li key={i}>
                <Typography variant="body1">{achievement}</Typography>
              </li>
            ))}
          </ul>
          {index < education.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default MainContent; 