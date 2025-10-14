import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const isLoggedIn = !!username && !!email;
  const [showLoginMsg, setShowLoginMsg] = useState(false);

  const buttonSx = {
    bgcolor: 'white',
    color: '#07406e',
    fontSize: 25,
    borderRadius: '20px',
    px: 5,
    py: 1.5,
    minWidth: 200,
    mt: 2,
    boxShadow: 3,
    fontWeight: 700,
    transition: 'all 0.2s',
    '&:hover': {
      bgcolor: '#07406e',
      color: 'white',
      border: '2px solid white',
    },
  };

  const handleRegisterClick = () => {
    if (isLoggedIn) {
      navigate('/register');
    } else {
      setShowLoginMsg(true);
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: 'calc(100vh - 170px)',
        backgroundImage: `url('/travel.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        pt: '100px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 900, px: 2, mt: '-40px' }}>
        <Typography
          variant="h2"
          fontWeight={900}
          letterSpacing={2}
          mb={2}
          sx={{
            color: '#fff',
            WebkitTextStroke: '2px #fff',
            transition: 'color 0.25s, transform 0.3s ease',
            cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif",
            '&:hover': {
              color: 'transparent',
              WebkitTextStroke: '2px #fff',
              transform: 'scale(1.05)',
            },
          }}
        >
          WANDER SOLO, DREAM BIG
        </Typography>
        <Typography variant="h6" color="#f9d342" mb={2}>
          Experience unforgettable adventures with tailor-made travel plans.
        </Typography>
        <Typography sx={{ fontSize: 18, lineHeight: 1.6, mb: 3, color: '#f0f0f0' }}>
          Step into a world where every journey is yours — no compromises, just pure freedom.
          From hidden gems to serene escapes, we craft solo adventures that match your pace, passion, and dreams.
        </Typography>
        <Button
          variant="contained"
          sx={buttonSx}
          onClick={handleRegisterClick}
        >
          Register Now
        </Button>
        {showLoginMsg && !isLoggedIn && (
          <Typography sx={{ color: 'white', mt: 2, fontWeight: 500, fontSize: 18 }}>
            You must log in first to register!
          </Typography>
        )}
      </Box>
    </Box>
  );
}
