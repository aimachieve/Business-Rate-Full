// material
import React from "react"

import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Link } from '@material-ui/core';
//
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: "#f5f6fa"
}));

// ----------------------------------------------------------------------

export default function Goal() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', }}>
        {/* Card */}
        <Stack alignItems={'center'} spacing={3} sx={{}}>
          <Typography sx={{ color: '#083f62', fontSize: 50, fontWeight: 600, textAlign: 'center', mt: 1 }}>
            We love local business. It's our goal to help people.
          </Typography>
          <Typography sx={{ color: '#0b4064', fontSize: 20, fontWeight: 600, textAlign: 'center', fontStyle: 'Poppins' }}>
            We quickly and conveniently find and support Top Rated Local® businesses. Because of this, we’ve seen tremendous growth!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-Badge-Fastest.svg" alt="img" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-Badge-Family.svg" alt="img" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-Badge-Glassdoor.svg" alt="img" />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src="https://s3.amazonaws.com/topratedlocal/home_page/TRL-Badge-Top10.svg" alt="img" />
            </Grid>
          </Grid>
          <Link href="https://vimeo.com/129986787">
            <Stack direction={'row'} spacing={1} alignItems="center">
              <Typography sx={{ color: '#083f62', fontSize: 30, fontWeight: 600 }}>
                Watch entrepreneurs video
              </Typography>
              <img src="	https://s3.amazonaws.com/topratedlocal/home_page/TRL-Play-Button.svg" alt="vimeo" />
            </Stack>
          </Link>
        </Stack>
      </Container>
    </RootStyle>
  );
}
