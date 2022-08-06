// import { Icon } from '@iconify/react';
// import googleFill from '@iconify/icons-eva/google-fill';
// import twitterFill from '@iconify/icons-eva/twitter-fill';
// import facebookFill from '@iconify/icons-eva/facebook-fill';
// import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// import { Link as ScrollLink } from 'react-scroll';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@material-ui/core';
//
// import SvgIconStyle from 'components/SvgIconStyle';
// ----------------------------------------------------------------------

// const SOCIALS = [
//   { name: 'FaceBook', icon: facebookFill },
//   { name: 'Google', icon: googleFill },
//   { name: 'Linkedin', icon: linkedinFill },
//   { name: 'Twitter', icon: twitterFill }
// ];

const LINKS = [
  {
    headline: 'Company',
    children: [
      { name: 'About', href: '/aboutus' },
      { name: 'Legal', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '/contactus' },
      { name: 'Report Spam', href: '#' },
      { name: 'Branding Guidelines', href: '#' },
      { name: 'Supported Sources', href: '#' }
    ]
  },
  {
    headline: 'Get Listed',
    children: [
      { name: 'Login', href: '#' },
      { name: 'Sign Up', href: '#' },
      { name: 'Create Free Account', href: '#' },
      { name: 'Suggest A Business', href: '#' },
      { name: 'Broncos Business Pick', href: '#' }
    ]
  },
  {
    headline: 'More...',
    children: [
      { name: 'Create Free Account', href: '#' },
      { name: 'Sign Up', href: '#' },
      { name: 'Create Free Account', href: '#' },
      { name: 'Suggest A Business', href: '#' },
      { name: 'Broncos Business Pick', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'url(/images/TRL-Footer-Illustration.svg)',
  backgroundRepeat: 'no-repeat',
  // backgroundSize: '100% 100%'
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 50,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{marginTop: '200px', marginBottom: '50px'}}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid container item xs={12} md={12} spacing={3}>
            <Grid item xs={6} md={3} justifyContent="space-between">
              <img src="/images/footer-flag.svg" alt='footer' />
              <Typography
                variant="overline"
                color="white"
                sx={{
                  display: 'block',
                  fontWeight: 300,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  mt: 3,
                  textAlign: 'center'
                }}
              >
                BusinessRate is built upon 5 pillars of the customer experience and is created to empower both businesses and consumers. Capturing the overall customer experience is unlike anything on the market.
              </Typography>
              <Typography
                variant="overline"
                color="white"
                sx={{
                  display: 'block',
                  fontWeight: 200,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  mt: 3,
                  textAlign: 'center'
                }}
              >
                ©2022 Top Rated Local®
              </Typography>
            </Grid>
            {LINKS.map((list, index) => {
              const { headline, children } = list;
              return (
                <Grid item xs={6} md={3} justifyContent="space-between" key={index}>
                  <Stack spacing={1}>
                    <Typography
                      variant="overline"
                      color="white"
                      sx={{ fontFamily: 'Poppins', fontSize: 20, lineHeight: '30px', fontWeight: 600, textAlign: 'center', mb: 3 }}
                    >
                      {headline}
                    </Typography>
                    {children.map((link, index) => (
                      <Link
                        to={link.href}
                        key={index}
                        color="white"
                        component={RouterLink}
                        sx={{
                          display: 'block',
                          fontWeight: 300,
                          fontSize: 16,
                          fontFamily: 'Poppins',
                          textAlign: 'center'
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      {/* <Divider sx={{ border: '2px solid #ffffff' }} /> */}

      {/* <Typography
        color="white"
        sx={{
          py: 4,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '24px',
          textAlign: 'center',
          fontFamily: 'Poppins'
        }}
      >
        Copyright @ 2022 Top Rated Local®
      </Typography> */}
    </RootStyle>
  );
}
