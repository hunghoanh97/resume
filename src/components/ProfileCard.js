import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';

const ProfileCard = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
}) => {
  // Tilt effect state and handlers
  const [tiltStyle, setTiltStyle] = React.useState({});

  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease',
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        },
        ...tiltStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #3498db, #2ecc71)',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Avatar */}
        <Box
          component="img"
          src={avatarUrl || `${process.env.PUBLIC_URL}/Avatar.png`}
          alt={name}
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

        {showUserInfo && (
          <>
            {/* User info */}
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: 'white' }}>
              {name}
            </Typography>
            
            <Chip
              label={title}
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 500,
                mb: 1,
                '& .MuiChip-label': { px: 2 },
              }}
            />
            
            {handle && (
              <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.8)' }}>
                @{handle}
              </Typography>
            )}
            
            {status && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: status.toLowerCase() === 'online' ? '#2ecc71' : 'grey.400',
                    mr: 1,
                  }}
                />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  {status}
                </Typography>
              </Box>
            )}
            
            {/* Contact button */}
            {contactText && (
              <Button
                variant="contained"
                onClick={onContactClick}
                sx={{
                  mt: 2,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.3)',
                  },
                }}
              >
                {contactText}
              </Button>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProfileCard;