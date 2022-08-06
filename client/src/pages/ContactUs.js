// material
import React from "react"
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, Stack, Button, TextField, MenuItem, Select, FormControl, InputLabel, Link } from '@material-ui/core';

// import ReactImageZoom from 'react-image-zoom';
// import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0)
}));

// ----------------------------------------------------------------------

export default function ContactUs() {

  return (
    <RootStyle>
      <Container maxWidth="lg" >
        <Typography variant="h2" textAlign={'center'} mb={3}>Get in touch</Typography>
        <Grid container spacing={5} mb={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={5.5}>
            <Stack spacing={1}>
              <Typography variant="h3">What can we help you with today?</Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select reason</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  placeholder="Color"
                >
                  <MenuItem value={10}>Not a Birdeye customer. I need to talk to Sales.</MenuItem>
                  <MenuItem value={30}>I am a Birdeye customer and I need support.</MenuItem>
                  <MenuItem value={30}>I want to chat about something else.</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Your company name" />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Number of locations</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  placeholder="Color"
                >
                  <MenuItem value={10}>1 location</MenuItem>
                  <MenuItem value={30}>2-3 locations</MenuItem>
                  <MenuItem value={30}>4-14 locations</MenuItem>
                  <MenuItem value={30}>15-249 locations</MenuItem>
                  <MenuItem value={30}>250+ locations</MenuItem>
                </Select>
              </FormControl>
              <Stack direction="row" justifyContent={'space-between'}>
                <TextField label="Full name" />
                <TextField label="Your mobile number" />
              </Stack>
              <TextField label="Email" />
              <TextField multiline rows={5} label="Message" fullWidth />
              <Button variant="contained" p="3">CONTACT US</Button>
              <Typography textAlign="center">or call us today 1 800 561 3357</Typography>
              <Typography sx={{fontWeight: 'bold'}}>By continuing, you're agreeing to Birdeye</Typography>
              <Link to="#">terms an conditions. </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={1}>
          </Grid>
          <Grid item xs={12} md={5.5} sx={{ backgroundColor: "#f4f0eb", marginTop: '40px' }}>
            {/* Contact sales */}
            <Stack direction="row" spacing={2}>
              <img src="https://cdn2.birdeye.com/version2/components/icons/messenger-icon.svg" alt="Messenger Icon" />
              <Typography variant="h5">CONTACT SALES</Typography>
            </Stack>
            <Typography>
              <b>North America: </b> Call 1-800-561-3357 ext. 1
            </Typography>
            <Typography mb={3}>
              <b>Australia: </b> Call +61 1800 958 306 ext. 1
            </Typography>
            <Button variant="outlined" p={3} sx={{marginBottom: '30px'}}>Contact Sales</Button>
            {/* Customer support */}
            <Stack direction="row" spacing={2}>
              <img src="https://cdn2.birdeye.com/version2/components/icons/be-connected-icon.svg" alt="Messenger Icon" />
              <Typography variant="h5">CONTACT SUPPORT</Typography>
            </Stack>
            <Typography>
              <b>North America: </b> Call 1-800-561-3357 ext. 1
            </Typography>
            <Typography mb={3}>
              <b>Australia: </b> Call +61 1800 958 306 ext. 1
            </Typography>
            <Button variant="outlined" p={3}
             sx={{marginBottom: '30px'}}>Contact SUPPORT</Button>
            {/* sCEDULE A DEMO */}
            <Stack direction="row" spacing={2}>
            <img src="https://cdn2.birdeye.com/version2/components/icons/calendar-icon.svg" alt="Calendar Icon" />
              <Typography variant="h5">SCHEDULE A DEMO</Typography>
            </Stack>
            <Typography>
              Find out how to increase customer reviews, be found online and get new customers
              - easily and effectively
            </Typography>
            <Button variant="outlined" p={3} mb={3}>SCHEDULE A DEMO</Button>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
