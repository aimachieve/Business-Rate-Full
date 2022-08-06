// material
import React from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack } from '@material-ui/core';
//
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: "#f5f6fa"
}));

// ----------------------------------------------------------------------

export default function Cites() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', }}>
        {/* Claim top rated local business */}
        <Grid container spacing={5} mb={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems="flex-start" mt={15}>
              <Typography sx={{ color: '#235789', fontSize: 40, fontWeight: 700, lineHeight: '50px', fontStyle: 'Poppins', mt: 3 }}>
                Top Rated Local® businesses across America's Largest cities
              </Typography>
              <Typography sx={{ color: '#0d7abc', fontSize: 30, fontWeight: 700, lineHeight: '50px', fontStyle: 'Poppins', mt: 3 }}>
                Popular Cities:
              </Typography>
              <Typography sx={{ color: '#235789', fontStyle: 'Poppins' }}>
                New York, NY | Los Angeles, CA | Chicago, IL | Houston, TX | Philadelphia, PA | Phoenix, AZ | San Antonio, TX | San Diego, CA | Dallas, TX | San Jose, CA | Jacksonville, FL | Indianapolis, IN | San Francisco, CA | Austin, TX | Columbus, OH | Fort Worth, TX | Detroit, MI | Seattle, WA | Boston, MA | Denver, CO
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="	https://s3.amazonaws.com/topratedlocal/home_page/TRL-Map-Illustration.svg" alt="headphone-banner" style={{ width: '100%', height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
