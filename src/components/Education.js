import React from 'react';
import { Box, Typography, Container, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Education = ({ education }) => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
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
          <SchoolIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
          Education
        </Typography>
        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <Card 
                sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    width: { xs: '100%', md: '300px' },
                    height: { xs: '200px', md: 'auto' },
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(52, 152, 219, 0.8), rgba(46, 204, 113, 0.8))',
                    }
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 80, opacity: 0.8 }} />
                </CardMedia>
                <CardContent sx={{ flex: 1, p: 4 }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="secondary.main" 
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary" 
                    gutterBottom
                    sx={{ mb: 3 }}
                  >
                    {edu.period}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      mb: 3
                    }}
                  >
                    {edu.description}
                  </Typography>
                  {edu.achievements && (
                    <Box sx={{ mt: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1,
                          mb: 2,
                          color: 'primary.main'
                        }}
                      >
                        <EmojiEventsIcon color="secondary" />
                        Achievements
                      </Typography>
                      <Grid container spacing={2}>
                        {edu.achievements.map((achievement, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Paper 
                              elevation={1} 
                              sx={{ 
                                p: 2,
                                bgcolor: 'background.paper',
                                borderLeft: '4px solid',
                                borderColor: 'secondary.main'
                              }}
                            >
                              <Typography variant="body2">
                                {achievement}
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education; 