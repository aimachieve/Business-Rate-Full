// import { useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid } from '@material-ui/core';
// routes
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  // background: 'url(/images/banner1.jpg)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function Restaurants() {
  // const [age, setAge] = useState('');
  // const [value, setValue] = useState(new Date());
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} md={9}>
                  <TextField sx={{ background: 'white' }} label="Search by Name, Category or Location" fullWidth />
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                  <Button variant="contained" fullWidth sx={{
                    border: "solid 2px #ffb03d",
                    borderRadius: '50px',
                    backgroundColor: "#ffb03d",
                    color: 'white',
                    padding: '10px'
                  }}>
                    Find Business
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
            <Container>
              <motion.div variants={varWrapEnter} style={{ color: "#29B2FE", marginBottom: '20px' }}>
                <Icon icon={homeFill} /> / Restaurants
              </motion.div>
              <Container>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30 }}>
                    Popular Restaurants
                  </Typography>
                  <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                    {
                      [...Array(20).keys()].map((p, i) => (
                        <Grid item xs={6} md={3} key={i} sx={{ color: "#4b759e" }}>
                          {`#${p + 1} Restaurant`}
                        </Grid>
                      ))
                    }
                  </Grid>
                  <div style={{ textAlign: 'right' }}>
                    <Button sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 15, flex: 'end' }}>
                      View More
                    </Button>
                  </div>
                </motion.div>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30 }}>
                    Browse Restaurants By State
                  </Typography>
                  <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          California
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          New York
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          Texas
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          Illinois
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                  </Grid>
                  <div style={{ textAlign: 'right' }}>
                    <Button sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 15, flex: 'end' }}>
                      View More
                    </Button>
                  </div>
                </motion.div>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30 }}>
                    Browse Restaurants By City
                  </Typography>
                  <Grid container spacing={2} sx={{ width: 1, mx: 'auto' }} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          Los Angeles, CA
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          New York, NY
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          Dallas, TX
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack>
                        <Typography sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#1d4871", fontSize: 20 }}>
                          Chicago, IL
                        </Typography>
                        {
                          [...Array(5).keys()].map((p, i) => (
                            <Typography sx={{ color: "#4b759e", fontFamily: 'Poppins' }} key={i}>
                              {`#${p + 1} Restaurant`}
                            </Typography>
                          ))
                        }
                      </Stack>
                    </Grid>
                  </Grid>
                  <div style={{ textAlign: 'right' }}>
                    <Button sx={{ mb: 3, fontFamily: 'PoppinsBold', color: "#173858", fontSize: 15, flex: 'end' }}>
                      View More
                    </Button>
                  </div>
                </motion.div>
              </Container>
            </Container>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
