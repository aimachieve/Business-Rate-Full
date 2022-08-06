// material
import React from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Button, TextField, Divider } from '@material-ui/core';
import useCart from "hooks/useCart"

// import ReactImageZoom from 'react-image-zoom';
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0),
  textAlign: "center"
}));

// ----------------------------------------------------------------------

export default function Claim() {
  const { products, updateCart, totalPrice } = useCart()

  const arrayRemoe = (arr, id) => {
    return arr.filter((a) => {
      return a.id !== id
    })
  }

  const handleChange = (count, id) => {
    const products = JSON.parse(localStorage.getItem('products'))
    const result = products.filter(p => p.id === id)
    console.log("count of result=>", result)
    result[0].count = Number(count)
    localStorage.setItem('products', JSON.stringify(products))

    updateCart(products)
  }

  const handleRemove = (id) => {
    console.log('handleRemove=>', id)
    const products = JSON.parse(localStorage.getItem('products'))
    const newProducts = arrayRemoe(products, id)
    
    localStorage.setItem('products', JSON.stringify(newProducts))
    updateCart(newProducts)
  }

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Typography sx={{ fontSize: "30px", fontStyle: 'Poppins' }} mb={3}>
          Your Shopping Cart
        </Typography>
        <Stack direction="row" justifyContent={'center'} spacing={5} mb={3}>
          <Button href="/cart" sx={{ width: '200px', p: 1.5 }} variant="outlined">
            Update
          </Button>
          <Button href="/checkout" sx={{ width: '200px', p: 1.5 }} variant="contained">
            Checkout →
          </Button>
        </Stack>
        {/* Products list */}
        {
          products && products.map((p, index) => (
            <React.Fragment key={index}>
              <Stack direction="row" justifyContent={"space-between"}>
                <Stack direction="row" alignItems={'center'}>
                  <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/bao_bh9_matte_black_01_medium.jpg?v=1567095523" alt="head1" style={{ width: '100px', height: '100px' }} />
                  <Stack alignItems={'flex-start'}>
                    <Typography sx={{ fontStyle: "Poppins", fontSize: '20px' }}>{p.name}</Typography>
                    <Typography sx={{ fontStyle: "Poppins", fontSize: '15px' }}>argilla bright</Typography>
                  </Stack>
                </Stack>
                <Stack direction={'row'} spacing={5} alignItems={'center'}>
                  {/* Qty */}
                  <Stack direction="row" alignItems={'center'} spacing={1}>
                    <TextField
                      type="number"
                      onChange={
                        (e) => {
                          handleChange(e.target.value, p.id)
                        }
                      }
                      defaultValue={p.count}
                    />
                    <Button variant="outlined" sx={{ height: '55px' }} onClick={() => {
                      handleRemove(p.id)
                    }}>X</Button>
                  </Stack>
                  {/* Price */}
                  <Stack alignItems={'flex-end'}>
                    <Typography sx={{ fontStyle: "Poppins", fontSize: '20px' }}>{p.count} x ${p.price} USD</Typography>
                    <Typography sx={{ fontStyle: "Poppins", fontSize: '15px' }}>${p.count * p.price} USD</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Divider />
            </React.Fragment>
          ))
        }
        {/* Comments adn buttons */}

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={6}>
            <Stack alignItems={'flex-start'} spacing={2}>
              <Typography sx={{
                fontStyle: 'Poppins',
                fontSize: '15px'
              }}>
                Add a note to your order
              </Typography>
              <TextField
                label="Note"
                fullWidth
                multiline
                rows={6}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack justifyContent="space-between" spacing={13}>
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
              {/* Checkout */}
              <Stack spacing={1}>
                <Typography sx={{
                  fontStyle: 'Poppins',
                  fontSize: '12px',
                  textAlign: 'right',
                }}>
                  Shipping & taxes calculated at checkout
                </Typography>
                <Stack direction="row" justifyContent={'space-between'}>
                  <Button sx={{ width: '200px', p: 1.5 }} variant="outlined">
                    Update
                  </Button>
                  <Button href="/checkout" sx={{ width: '200px', p: 1.5 }} variant="contained">
                    Checkout →
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
