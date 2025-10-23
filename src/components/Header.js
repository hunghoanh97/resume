import React from 'react';
import { Box, Typography, Container, Grid, Divider, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = ({ personalInfo }) => {
  return (
    <Box sx={{ 
      bgcolor: 'primary.main', 
      color: 'white',
      py: 6,
      mb: 4,
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #3498db, #2ecc71)',
      }
    }}>
      <Container>
        <Grid container spacing={4}>
          {/* Top Row with Avatar and Contact Info */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
            {/* Avatar */}
            <Avatar
              src={personalInfo.avatar || '/default-avatar.png'}
              alt={personalInfo.name}
              sx={{
                width: 200,
                height: 200,
                border: '4px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            />

            {/* Contact Info Box */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              backdropFilter: 'blur(10px)',
              width: 320,
              ml: 'auto'
            }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'center', columnGap: 8, minHeight: 32 }}>
                <EmailIcon sx={{ color: 'secondary.light', fontSize: 20, justifySelf: 'center' }} />
                <Typography 
                  component="a" 
                  href={`mailto:${personalInfo.email}`}
                  noWrap 
                  sx={{ 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'secondary.light'
                    }
                  }}
                >
                  {personalInfo.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'center', columnGap: 8, minHeight: 32 }}>
                <PhoneIcon sx={{ color: 'secondary.light', fontSize: 20, justifySelf: 'center' }} />
                <Typography 
                  component="a" 
                  href={`tel:${personalInfo.phone}`}
                  noWrap 
                  sx={{ 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'secondary.light'
                    }
                  }}
                >
                  {personalInfo.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'center', columnGap: 8, minHeight: 32 }}>
                <LocationOnIcon sx={{ color: 'secondary.light', fontSize: 20, justifySelf: 'center' }} />
                <Typography noWrap sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{personalInfo.location}</Typography>
              </Box>
              <Divider sx={{ my: 1, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <LinkedInIcon 
                  component="a"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    cursor: 'pointer', 
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': { 
                      color: 'secondary.light',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    } 
                  }} 
                />
                <GitHubIcon 
                  component="a"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    cursor: 'pointer', 
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': { 
                      color: 'secondary.light',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    } 
                  }} 
                />
              </Box>
            </Box>
          </Grid>

          {/* Bottom Row with Name, Title and Summary */}
          <Grid item xs={12}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                mb: 2
              }}
            >
              {personalInfo.name}
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'secondary.light',
                mb: 3,
                fontWeight: 500
              }}
            >
              {personalInfo.title}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                whiteSpace: 'pre-line'
              }}
            >
              {personalInfo.summary}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;