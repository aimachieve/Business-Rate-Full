import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack } from '@material-ui/core';
// routes
//
import { varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  // background: 'url(/images/banner1.jpg)',
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

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(30),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        {/* <HeroOverlayStyle alt="hero" src="/images/hero-bg.png" variants={varFadeIn} /> */}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: '#235789', fontSize: 80, fontWeight: 700, lineHeight: '90px', textAlign: 'center', fontStyle: 'Poppins', mt: 5 }}>
                Subway is a Top 10 <br />
                Restaurant in Los Angeles, CA
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
