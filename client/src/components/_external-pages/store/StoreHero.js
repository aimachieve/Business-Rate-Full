import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Button } from '@material-ui/core';
// routes
//
import { varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  background: 'url(https://cdn.shopify.com/s/files/1/0263/8364/6794/files/slide_01_1296x.jpg?v=1567598541)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack alignItems={'center'} spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(30),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function StoreHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        {/* <HeroOverlayStyle alt="hero" src="/images/hero-bg.png" variants={varFadeIn} /> */}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'white', fontSize: '16px', fontStyle: 'Poppins', mt: 3 }}>
                THUNDERBOLT
              </Typography>
              <Typography sx={{ color: 'white', fontSize: '32px', fontStyle: 'Poppins', mt: 1, mb: 2 }}>
                PREMIUM HEADPHONES
              </Typography>
              <Button variant="contained"> Shop Now </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
