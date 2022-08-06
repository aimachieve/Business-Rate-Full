// material
import React from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Button, TextField, Divider, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import useCart from "hooks/useCart"

// import ReactImageZoom from 'react-image-zoom';
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0),
  textAlign: "center"
}));

// ----------------------------------------------------------------------

export default function Checkout() {
  const { totalPrice, products } = useCart()
  console.log(process.env.REACT_APP_STRIPE_PUBKEY)
  return (
    <RootStyle>
      <Container maxWidth="lg">

        {/* Comments adn buttons */}

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "25px", fontStyle: 'Poppins', textAlign: 'left' }} mb={3}>
              Thunderbold
            </Typography>
            <Typography sx={{ fontSize: "15px", fontStyle: 'Poppins' }} mb={3}>
              Express checkout
            </Typography>
            <Button sx={{ width: '50%', p: 1.5 }} variant="contained">
              Stripe
            </Button>
            <Divider sx={{ mt: 3, mb: 3 }}> OR </Divider>
            <Stack direction="row" justifyContent={'space-between'} alignItems="center">
              <Typography sx={{ fontSize: "20px", fontStyle: 'Poppins', textAlign: 'left' }} mb={3}>
                Contact information
              </Typography>
              <Stack direction="row" alignItems={'center'} justifyContent="center">
                <Typography sx={{ fontSize: "15px", fontStyle: 'Poppins' }} mb={3}>
                  Already have an account?
                </Typography>
                <Button variant="text">
                  Log in
                </Button>
              </Stack>
            </Stack>
            <TextField
              fullWidth
              placeholder="Email or mobild phone number"
            />
            <Typography sx={{ fontSize: "20px", fontStyle: 'Poppins', textAlign: 'left' }} mb={3}>
              Shipping address
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent={'space-between'}>
                <TextField
                  placeholder="First name"
                />
                <TextField
                  placeholder="Last name"
                />
              </Stack>
              <TextField
                fullWidth
                placeholder="Address"
              />
              <TextField
                fullWidth
                placeholder="Apartment, suite, etc. (optional)"
              />
              <TextField
                fullWidth
                placeholder="City"
              />
              <Stack direction="row" justifyContent={'space-between'} spacing={1}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Coungry/region</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Coungry/region"
                    placeholder="Coungry/region"
                  >
                    <MenuItem value={10}>matte black</MenuItem>
                    <MenuItem value={30}>argilla bright</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label1">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label1"
                    id="demo-simple-select"
                    label="State"
                    placeholder="State"
                  >
                    <MenuItem value={10}>matte black</MenuItem>
                    <MenuItem value={30}>argilla bright</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  placeholder="Zip code"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{ p: 1.5 }}>
                  Continue to shipping
                </Button>
                <Button href="/cart" variant="text">
                  Return to cart
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Products list */}
            {
              products && products.map((p, index) => (
                <React.Fragment key={index}>
                  <Stack direction="row" justifyContent={"space-between"} alignItems="center">
                    <Stack direction="row" alignItems={'center'}>
                      <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/bao_bh9_matte_black_01_medium.jpg?v=1567095523" alt="head1" style={{ width: '100px', height: '100px' }} />
                      <Stack alignItems={'flex-start'}>
                        <Typography sx={{ fontStyle: "Poppins", fontSize: '20px' }}>{p.name}</Typography>
                        <Typography sx={{ fontStyle: "Poppins", fontSize: '15px' }}>argilla bright</Typography>
                      </Stack>
                    </Stack>
                    <Typography sx={{
                      fontStyle: 'Poppins',
                      fontSize: '15px'
                    }}>
                      ${p.count * p.price} USD
                    </Typography>
                  </Stack>
                  <Divider />
                </React.Fragment>
              ))
            }
            <Stack justifyContent="space-between" spacing={13} mt={3}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems="center">
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '15px'
                }}>
                  Subtotal
                </Typography>
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '15px'
                }}>
                  ${totalPrice} USD
                </Typography>
              </Stack>
            </Stack>
            <Stack justifyContent="space-between" spacing={13} mt={3}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems="center">
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '15px'
                }}>
                  Shipping
                </Typography>
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '15px'
                }}>
                  Calculated at next step
                </Typography>
              </Stack>
            </Stack>

            <Divider />

            <Stack justifyContent="space-between" spacing={13} mt={3}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems="center">
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '15px'
                }}>
                  Total
                </Typography>
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '20px'
                }}>
                  ${totalPrice} USD
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle >
  );
}
