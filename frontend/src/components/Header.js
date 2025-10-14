import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'LOCATIONS', path: '/#locations' },
  { label: 'PACKAGES', path: '/#packages' },
  { label: 'ABOUT US', path: '/about' },
  { label: 'CONTACT US', path: '/contact' },
];

export default function Header({ username, setUsername }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  React.useEffect(() => {
    if (location.pathname === '/login') {
      setActiveLink('LOGIN');
      return;
    }
    if (location.pathname === '/register') {
      setActiveLink(null);
      return;
    }
    if (location.pathname === '/contact') {
      setActiveLink('CONTACT US');
      return;
    }
    if (location.pathname === '/about') {
      setActiveLink('ABOUT US');
      return;
    }
    if (location.pathname === '/') {
      setActiveLink(null);
      return;
    }
    setActiveLink(null);
  }, [location]);

  const baseButtonSx = {
    px: 4,
    py: 1.7,
    fontWeight: 500,
    fontSize: 18,
    borderRadius: 2,
    boxSizing: 'border-box',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    bgcolor: 'transparent',
    color: 'white',
    '&:hover': {
      bgcolor: 'white',
      color: 'primary.main',
      boxShadow: 1,
    },
    '&.active': {
      bgcolor: 'white',
      color: 'primary.main',
      fontWeight: 700,
    },
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, null, `/#${id}`);
    }
  };

  const handleScroll = (e, path) => {
    if (path === '/') {
      e.preventDefault();
      navigate('/', { replace: true });
      return;
    }
    if (path === '/#locations' || path === '/#packages') {
      e.preventDefault();
      const id = path.replace('/#', '');
      if (location.pathname === '/') {
        scrollToElement(id);
      } else {
        navigate('/');
        setTimeout(() => {
          scrollToElement(id);
        }, 450);
      }
      return;
    }
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setUsername(null);
    window.location.reload();
  };

  return (
    <AppBar
      elevation={2}
      position="fixed"
      sx={{
        bgcolor: 'primary.main',
        width: '100vw',
        left: 0,
        right: 0,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 120,
          py: 1.5,
          px: { xs: 2, md: 8 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img
            src="/logo.jpg"
            alt="Logo"
            style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 6, background: 'white' }}
          />
          <Typography variant="h5" fontWeight={700} sx={{ color: 'white' }}>
            GlobeTrekker
          </Typography>
        </Box>

        {/* Desktop navigation */}
        <Box
          sx={{
            borderRadius: 3,
            px: 0,
            py: 0.5,
            display: { xs: 'none', md: 'flex' },
            gap: 3,
            maxWidth: 700,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {navLinks.map(({ label, path }) => (
            <Button
              key={label}
              onClick={(e) => handleScroll(e, path)}
              sx={{
                ...baseButtonSx,
                ...(activeLink === label && {
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 700,
                }),
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* User info & login/logout */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {username ? (
            <>
              <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 18 }}>
                {username}
              </Typography>
              <Button onClick={handleLogout} sx={baseButtonSx}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate('/login')}
              sx={{
                ...baseButtonSx,
                ...(activeLink === 'LOGIN' && {
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 700,
                }),
              }}
            >
              Login/Signup
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
