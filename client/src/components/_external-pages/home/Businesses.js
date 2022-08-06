// material
import React from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Button } from '@material-ui/core';
//
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: "#f5f6fa"
}));

// ----------------------------------------------------------------------

export default function Business() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative',  }}>
        {/* Card */}
        <Stack alignItems={'center'} spacing={5} sx={{}}>
          <Typography sx={{ color: '#235789', fontSize: 40, fontWeight: 600, textAlign: 'center', mt: 1 }}>
            We track, score and rank the Top Rated Local® businesses
            across the most popular local business categories.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Stack spacing={2} alignItems="center">
                <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-CTA-Illustration-Plumber.svg" alt="Plumbing Services" />
                <Typography sx={{ color: '#235789', fontSize: '20px', fontWeight: 'bold', fontStyle: 'Poppins' }}>
                  Plumbing Services
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack spacing={2} alignItems="center">
                <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-CTA-Illustration-Electrician.svg" alt="Plumbing Services" />
                <Typography sx={{ color: '#235789', fontSize: '20px', fontWeight: 'bold', fontStyle: 'Poppins' }}>
                  Electrician Services
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack spacing={2} alignItems="center">
                <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-CTA-Illustration-Carpet.svg" alt="Plumbing Services" />
                <Typography sx={{ color: '#235789', fontSize: '20px', fontWeight: 'bold', fontStyle: 'Poppins' }}>
                  Plumbing Services
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack spacing={2} alignItems="center">
                <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-CTA-Illustration-Roofer.svg" alt="Plumbing Services" />
                <Typography sx={{ color: '#235789', fontSize: '20px', fontWeight: 'bold', fontStyle: 'Poppins' }}>
                  Roofing Contractors
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Button variant="outlined" sx={{
            color: "#ffb03d",
            border: "solid 2px #ffb03d",
            borderRadius: '50px',
            width: '200px',
          }}>
            Create Free Account
          </Button>
        </Stack>
      </Container>
    </RootStyle>
  );
}
