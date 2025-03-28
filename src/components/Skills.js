import React from 'react';
import { Box, Typography, Container, Grid, Paper, LinearProgress, Fade } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Skills = ({ skills }) => {
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
          <CodeIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4,
                    height: '100%',
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
                      fontWeight: 600,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    {skill.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {skill.items.map((item, idx) => (
                      <Box key={idx}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          mb: 1,
                          alignItems: 'center'
                        }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontWeight: 500,
                              color: 'text.primary'
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'secondary.main',
                              fontWeight: 500
                            }}
                          >
                            {item.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={item.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: 'linear-gradient(90deg, #3498db, #2ecc71)',
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 