import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const MainContent = ({ profile, experiences, education }) => {
  return (
    <Box sx={{ p: 4, flexGrow: 1, bgcolor: 'white' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        PROFILE
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {profile}
      </Typography>

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