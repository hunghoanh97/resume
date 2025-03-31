import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Sidebar = ({ personalInfo }) => {
  return (
    <Box
      sx={{
        bgcolor: '#2C3E50',
        color: 'white',
        p: 3,
        minHeight: '100vh',
        width: '350px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={personalInfo.avatar}
          alt={personalInfo.name}
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            mb: 2,
            objectFit: 'cover',
            border: '4px solid #64B5F6',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        />
        <Typography variant="h5" sx={{ mb: 1 }}>
          {personalInfo.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#64B5F6' }}>
          {personalInfo.title}
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        CONTACT
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Phone sx={{ color: '#64B5F6' }} />
          </ListItemIcon>
          <ListItemText primary={personalInfo.phone} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Email sx={{ color: '#64B5F6' }} />
          </ListItemIcon>
          <ListItemText primary={personalInfo.email} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOn sx={{ color: '#64B5F6' }} />
          </ListItemIcon>
          <ListItemText primary={personalInfo.location} />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        LANGUAGES
      </Typography>
      <List>
        {personalInfo.languages?.map((lang, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={`${lang.name}: ${lang.level}`}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        HOBBIES
      </Typography>
      <List>
        {personalInfo.hobbies?.map((hobby, index) => (
          <ListItem key={index}>
            <ListItemText primary={hobby} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar; 