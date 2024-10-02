import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import images from '../LinksData'; // Adjust the path as needed
import InputSearch from '../Components/InputSearch'

const Card = styled(Box)(({ theme }) => ({
  height: '180px', // Set a fixed height for consistency
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  margin: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  zIndex: 1,
  transition: 'transform 0.3s ease',
}));

export default function Hero() {
  const [scrollDirection, setScrollDirection] = React.useState('down');
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleScroll = () => {
    const newScrollY = window.scrollY;

    if (newScrollY > lastScrollY && isVisible) {
      setScrollDirection('down');
      setIsVisible(false);
    } else if (newScrollY < lastScrollY && !isVisible) {
      setScrollDirection('up');
      setIsVisible(true);
    }

    setLastScrollY(newScrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isVisible]);

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(72, 41, 178, 0.9)',
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 25 },
          pb: { xs: 8, sm: 12 },
          position: 'relative',
          zIndex: 2, // Ensure content is above the background
          backgroundColor: 'transparent', // Ensure content background is transparent
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'left', width: { xs: '100%', sm: '90%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: 12,
              color: '#E83E8C',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            The perfect Business Adventure
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Search For <br />
            Business to Buy
          </Typography>
          <InputSearch />
        </Stack>
      </Container>
      <CardContainer
        sx={{
          transform: scrollDirection === 'down' && !isVisible ? 'translateY(-400%)' : 'translateY(0)',
          transition: 'transform 1.9s ease',
          maxHeight: 'calc(100vh - 490px)', // Adjust based on your layout
          opacity: 0.4,
        }}
      >
        {images.map((image) => (
          <Card
            key={image.id}
            sx={{
              backgroundImage: `url(${image.url})`,
            }}
          />
        ))}
      </CardContainer>
    </Box>
  );
}
