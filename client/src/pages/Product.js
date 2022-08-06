// material
import React, { useState } from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import useCart from "hooks/useCart";

// import ReactImageZoom from 'react-image-zoom';
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0)
}));

// ----------------------------------------------------------------------

export default function Claim() {
  const [qty, setQty] = useState(1)
  const { updateCart } = useCart()

  const handleChangeQty = (e) => {
    e.preventDefault()

    setQty(e.target.value)
  }

  const addToCart = (product) => {
    if (localStorage.getItem('products')) {
      const products = JSON.parse(localStorage.getItem('products'))
      const result = products.filter(p => p.id === product.id)
      result[0].count += Number(qty)
      localStorage.setItem('products', JSON.stringify(products))

      updateCart(products)
    } else {
      const products = []
      products.push({
        ...product,
        count: Number(qty)
      })
      localStorage.setItem('products', JSON.stringify(products))
      
      updateCart(products)
    }
  }

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', }}>
        {/* Claim top rated local business */}
        <Grid container spacing={5} mb={3}>
          <Grid item xs={12} md={6}>
            <img src="https://cdn.shopify.com/s/files/1/0263/8364/6794/products/bao_bh9_matte_black_01_medium.jpg?v=1567095523" alt="headphone-banner" style={{ width: '100%', height: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems="flex-start" mt={15}>
              <Typography sx={{ fontSize: 30, fontWeight: 500, lineHeight: '50px', textAlign: 'center', fontStyle: 'Poppins', mt: 3 }}>
                Beoplay H9 Headphones
              </Typography>
              <Typography sx={{ color: '#235789', fontStyle: 'Poppins' }}>
                $500.00 USD
              </Typography>
              <Stack direction="row" spacing={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    placeholder="Color"
                  >
                    <MenuItem value={10}>matte black</MenuItem>
                    <MenuItem value={30}>argilla bright</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Qty"
                  type="number"
                  value={qty}
                  onChange={handleChangeQty}
                />
              </Stack>
              <Button
                variant="contained"
                sx={{
                  color: 'white',
                  width: '200px'
                }}
                onClick={
                  () => {
                    addToCart({
                      id: 1,
                      img: "https://cdn.shopify.com/s/files/1/0263/8364/6794/products/bao_bh9_matte_black_01_medium.jpg?v=1567095523",
                      name: "Beoplay H9 Headphones",
                      price: 50000
                    })
                  }
                }
              >
                Add to Cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
