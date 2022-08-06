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

export default function StoreCard() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
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


        {/* Products headphone */}
        <Grid container spacing={2} mb={10}>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/bao_bh9_matte_black_01_medium.jpg?v=1567095523" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Beoplay H9 Headphones
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                50000
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/a_ed_charcoal_01_medium.jpg?v=1567098504" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Amazon Echo Dot Gen 3
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                2999 4999
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/t-1_medium.jpg?v=1589980314" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Pebbo For AirPods
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                2999
              </Typography>
              <Button variant="contained" sx={{ disable: true }}>Sold Out</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/gpb_white_01_medium.jpg?v=1567092418" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Google Pixel Buds
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                15900
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Cases & Protection collection */}
        <Grid container spacing={5} mb={3}>
          <Grid item xs={12} md={6} >
            <Stack spacing={2} alignItems="flex-start" mt={5}>
              <Typography variant="h3" sx={{ fontStyle: 'Poppins' }}>
                Cases & Protection
              </Typography>
              <Typography sx={{ fontStyle: 'Poppins' }}>
                We get it... You don't like to use a case because you think it ruins the aesthetic. But do you know what really ruins a day? A hefty repair bill because you thought your phone or laptop didn't need a case. Don't worry... We don't sacrifice style for function. After years of research we've developed sleek yet durable cases to keep your tech looking great while keeping it safe.
              </Typography>
              <Button variant="contained">Shop Collection</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/files/holding-iphone-6_medium.jpg?v=1589981876" alt="headphone-banner" style={{ width: '100%', height: '100%' }} />
          </Grid>
        </Grid>

        {/* Products Case */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/m_ps_01_medium.jpg?v=1567587948" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Pluma Laptop Sleeve
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                5495
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/m_m13_graphite_black_01_medium.jpg?v=1567147073" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Muse Slim Fit Sleeve
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                4995
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/n_rc_black_medium.jpg?v=1567146264" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                4995 6000
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                2999
              </Typography>
              <Button variant="contained" disabled>Sold Out</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="flex-start">
              <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/m_oc_01_medium.jpg?v=1567587565" alt="head1" />
              <Typography sx={{ color: '#030303', fontSize: '12px', fontStyle: 'Poppins', textAlign: 'left' }}>
                Overture iPhone Case
              </Typography>
              <Typography sx={{ color: '#030303', fontSize: '16px', fontStyle: 'Poppins' }}>
                4495
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
