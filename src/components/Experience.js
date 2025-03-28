import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';

const Experience = ({ experiences }) => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
      <Container>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            mb: 4,
            color: 'primary.main',
            fontWeight: 600
          }}
        >
          <WorkIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
          Work Experience
        </Typography>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3,
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: 6
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600
                    }}
                  >
                    {exp.position}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="secondary.main" 
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {exp.company} | {exp.period}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.8
                    }}
                  >
                    {exp.description}
                  </Typography>
                  {exp.achievements && (
                    <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                      {exp.achievements.map((achievement, idx) => (
                        <Typography 
                          component="li" 
                          key={idx} 
                          variant="body2"
                          sx={{ 
                            mb: 1,
                            color: 'text.secondary',
                            '&::marker': {
                              color: 'secondary.main'
                            }
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience; 