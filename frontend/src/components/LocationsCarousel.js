import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card, Box, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const locations = [
  { img: '/switzerland.jpg', country: 'Switzerland', city: 'Interlaken' },
  { img: '/maldives.jpg', country: 'Maldives', city: 'Malé' },
  { img: '/italy.avif', country: 'Italy', city: 'Rome' },
  { img: '/dubai.jpg', country: 'UAE', city: 'Dubai' },
  { img: '/Thailand.jpg', country: 'Thailand', city: 'Phuket' },
  { img: '/newzealand.webp', country: 'New Zealand', city: 'Queenstown' },
  { img: '/paris.jpg', country: 'France', city: 'Paris' },
  { img: '/japan.jpg', country: 'Japan', city: 'Kyoto' },
  { img: '/sydney.jpg', country: 'Australia', city: 'Sydney' },
];

export default function LocationsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const slidesToShow = 3;
  const totalSlides = Math.ceil(locations.length / slidesToShow) - 1;
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow,
    slidesToScroll: slidesToShow,
    beforeChange: (_, next) => setCurrentSlide(next / slidesToShow),
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <Box id="locations" sx={{ p: { xs: 2, md: 6 }, bgcolor: '#f7fafd' }}>
      <Typography variant="h4" color="primary" textAlign="center" mb={4}>
        Explore Our Top Locations
      </Typography>
      <Box sx={{ position: 'relative', maxWidth: 1300, mx: 'auto' }}>
        {/* Left Arrow */}
        {currentSlide > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: -48,
              zIndex: 2,
              transform: 'translateY(-50%)',
            }}
          >
            <Box
              component="button"
              onClick={() => sliderRef.current.slickPrev()}
              sx={{
                border: 'none',
                bgcolor: 'primary.main',
                width: 48,
                height: 48,
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 2,
                transition: 'background 0.2s',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
              aria-label="Previous Slide"
            >
              <ArrowBackIosNewIcon />
            </Box>
          </Box>
        )}
        {/* Right Arrow */}
        {currentSlide < totalSlides && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: -48,
              zIndex: 2,
              transform: 'translateY(-50%)',
            }}
          >
            <Box
              component="button"
              onClick={() => sliderRef.current.slickNext()}
              sx={{
                border: 'none',
                bgcolor: 'primary.main',
                width: 48,
                height: 48,
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 2,
                transition: 'background 0.2s',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
              aria-label="Next Slide"
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        )}

        <Slider
          ref={sliderRef}
          {...settings}
          className="slick-carousel"
          style={{ padding: '0 8px' }}
        >
          {locations.map(({ img, country, city }, i) => (
            <Box
              key={i}
              sx={{ px: 1 }}  // This adds horizontal gap between cards
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                sx={{
                  height: 550,
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 3,
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={city}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                    transform: hoveredIndex === i ? 'scale(1.05)' : 'none',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: hoveredIndex === i ? '100%' : '38%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: hoveredIndex === i ? 'center' : 'flex-end',
                    background: hoveredIndex === i
                      ? 'rgba(0, 0, 0, 0.55)'
                      : 'linear-gradient(0deg, rgba(0,0,0,0.65) 80%, transparent 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    textAlign: hoveredIndex === i ? 'center' : 'left',
                  }}
                >
                  <Typography variant="h5" fontWeight={700}>
                    {country}
                  </Typography>
                  <Typography>{city}</Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
