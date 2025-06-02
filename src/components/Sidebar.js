import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Chip } from '@mui/material';
import { Phone, Email, LocationOn, LinkedIn, GitHub, Language } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TranslateIcon from '@mui/icons-material/Translate';

const Sidebar = ({ personalInfo }) => {
  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Box
      sx={{
        bgcolor: '#3498db',
        color: 'white',
        p: 0,
        height: '100%',
        minHeight: { xs: 'auto', md: '100%' },
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: { xs: 'auto', md: '20px' },
      }}
    >
      {/* Header with gradient */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #3498db, #2ecc71)',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {personalInfo.avatar ? (
          <Box
            component="img"
            src={personalInfo.avatar}
            alt={personalInfo.name}
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              mb: 2,
              objectFit: 'cover',
              border: '4px solid white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          />
        ) : (
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              bgcolor: '#2ecc71',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              border: '4px solid white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            {getInitials(personalInfo.name)}
          </Avatar>
        )}
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', textAlign: 'center' }}>
          {personalInfo.name}
        </Typography>
        <Chip 
          label={personalInfo.title} 
          sx={{ 
            bgcolor: 'rgba(255,255,255,0.2)', 
            color: 'white', 
            fontWeight: 500,
            mb: 1,
            '& .MuiChip-label': { px: 2 }
          }} 
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            '&::after': {
              content: '""',
              flexGrow: 1,
              height: '2px',
              bgcolor: 'rgba(255,255,255,0.3)',
              ml: 1
            }
          }}
        >
          CONTACT
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Phone sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary={personalInfo.phone} primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Email sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary={personalInfo.email} primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LocationOn sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary={personalInfo.location} primaryTypographyProps={{ fontSize: '0.9rem' }} />
          </ListItem>
          {personalInfo.linkedin && (
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <LinkedIn sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={personalInfo.linkedin} primaryTypographyProps={{ fontSize: '0.9rem' }} />
            </ListItem>
          )}
          {personalInfo.github && (
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <GitHub sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={personalInfo.github} primaryTypographyProps={{ fontSize: '0.9rem' }} />
            </ListItem>
          )}
          {personalInfo.website && (
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Language sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={personalInfo.website} primaryTypographyProps={{ fontSize: '0.9rem' }} />
            </ListItem>
          )}
        </List>

        {personalInfo.languages && personalInfo.languages.length > 0 && (
          <>
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 4, 
                mb: 2, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                '&::after': {
                  content: '""',
                  flexGrow: 1,
                  height: '2px',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  ml: 1
                }
              }}
            >
              <TranslateIcon fontSize="small" />
              LANGUAGES
            </Typography>
            <List>
              {personalInfo.languages.map((lang, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {lang.name}
                    </Typography>
                    <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.2)', height: 6, borderRadius: 3 }}>
                      <Box 
                        sx={{ 
                          width: lang.level.includes('Advanced') ? '90%' : 
                                lang.level.includes('Intermediate') ? '60%' : 
                                lang.level.includes('Beginner') ? '30%' : '50%', 
                          bgcolor: '#2ecc71', 
                          height: 6, 
                          borderRadius: 3 
                        }} 
                      />
                    </Box>
                    <Typography variant="caption" sx={{ mt: 0.5, opacity: 0.8 }}>
                      {lang.level}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </>
        )}

        {personalInfo.hobbies && personalInfo.hobbies.length > 0 && (
          <>
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 4, 
                mb: 2, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                '&::after': {
                  content: '""',
                  flexGrow: 1,
                  height: '2px',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  ml: 1
                }
              }}
            >
              <FitnessCenterIcon fontSize="small" />
              HOBBIES
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {personalInfo.hobbies.map((hobby, index) => (
                <Chip 
                  key={index} 
                  label={hobby} 
                  size="small"
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.15)', 
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }} 
                />
              ))}
            </Box>
          </>
        )}
      </Box>

      {/* Footer */}
      <Box 
        sx={{ 
          p: 2, 
          bgcolor: 'rgba(0,0,0,0.1)', 
          textAlign: 'center',
          mt: 'auto'
        }}
      >
        <Typography variant="caption" sx={{ opacity: 0.8 }}>
          Updated {new Date().toLocaleDateString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;