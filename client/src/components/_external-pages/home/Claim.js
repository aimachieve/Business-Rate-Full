// material
import React from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Button } from '@material-ui/core';
//
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0)
}));

// ----------------------------------------------------------------------

export default function Claim() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative',  }}>
        {/* Claim top rated local business */}
        <Grid container spacing={5} mb={3}>
          <Grid item xs={12} md={6}>
            <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-Claim-Illustration.svg" alt="headphone-banner" style={{ width: '100%', height: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems="flex-start" mt={15}>
              <Typography sx={{ color: '#235789', fontSize: 40, fontWeight: 700, lineHeight: '50px', textAlign: 'center', fontStyle: 'Poppins', mt: 3 }}>
                Claim your Top Rated Local® <br /> business for FREE today
              </Typography>
              <Typography sx={{ color: '#235789', fontStyle: 'Poppins' }}>
                Joining Top Rated Local® is free and a great way to manage your business's online reputation. Top Rated Local® aggregates ratings and reviews from verified review sites online and then ranks businesses based on their overall Rating Score™.
              </Typography>
              <Button variant="contained" sx={{
                border: "solid 2px #ffb03d",
                borderRadius: '50px',
                backgroundColor: "#ffb03d",
                color: 'white',
                padding: '10px',
                width: '200px'
              }}>
                Create Free Account
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
