import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid, Link, Checkbox, Divider, Rating } from '@material-ui/core';
// routes
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
// action
import { searchProfile } from '../actions/search';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
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
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(20),
  // paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

const Profile = ({ searchProfile, search: { profile } }) => {
  let params = useParams();
  useEffect(() => {
    searchProfile(params.id)
  }, [params])

  const [value, setValue] = React.useState(0);

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Container>
              <motion.div variants={varWrapEnter} style={{ color: "#29B2FE", }}>
                <Icon icon={homeFill} /> / {
                  profile?.formatted_address
                } /
                {
                  profile?.name
                }
              </motion.div>
              <motion.div variants={varFadeInUp}>
                <Grid container spacing={2} sx={{ width: 1, mt: 2 }} justifyContent={'center'} alignItems={'flex-start'}>
                  <Grid item xs={12} md={3}>
                    <img src={profile?.icon} alt="business_logo" style={{ margin: 'auto' }} />
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <Stack spacing={2}>
                      <Typography sx={{ fontSize: '18px' }}> Please Rate:</Typography>
                      <Link to="#" sx={{ fontFamily: 'PoppinsBold', color: "#0d7abc", fontSize: 30, cursor: 'pointer' }}>
                        {profile?.name}
                      </Link>
                      <Divider />
                      <Typography> *indicates required fields</Typography>
                      <Typography variant="h5" sx={{ color: '#0b4064' }}>How would you like to rate this business?*</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Typography variant="h4" sx={{ color: '#29B2FE' }}>Quality</Typography>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Rating
                            name="quality"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ width: '400px' }} />
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Typography variant="h4" sx={{ color: '#29B2FE' }}>Value</Typography>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Rating
                            name="quality"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ width: '400px' }} />
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Typography variant="h4" sx={{ color: '#29B2FE' }}>Timeliness</Typography>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Rating
                            name="quality"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ width: '400px' }} />
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Typography variant="h4" sx={{ color: '#29B2FE' }}>Experience</Typography>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Rating
                            name="quality"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ width: '400px' }} />
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Typography variant="h4" sx={{ color: '#29B2FE' }}>Satisfaction</Typography>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Rating
                            name="quality"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ width: '400px' }} />
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Typography variant="h4" sx={{ color: '#0b4064' }}>Average Overall</Typography>
                        </Grid>
                        <Grid item xs={6} md={5}>
                          <Rating
                            name="quality"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ width: '400px' }} />
                      <Typography variant="h5" sx={{ color: '#0b4064' }}>Comments*</Typography>
                      <Typography>Share details about your experience with this business.</Typography>
                      <TextField
                        multiline
                        rows={4}
                      />
                      <Grid container spacing={2}>
                        <Grid item xs={4} md={4}>
                          <Stack spacing={2}>
                            <Typography variant="h5" sx={{ color: '#0b4064' }}>First Name*</Typography>
                            <TextField />
                          </Stack>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <Stack spacing={2}>
                            <Typography variant="h5" sx={{ color: '#0b4064' }}>last Name*</Typography>
                            <TextField />
                          </Stack>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <Stack spacing={2}>
                            <Typography variant="h5" sx={{ color: '#0b4064' }}>Email*</Typography>
                            <TextField />
                          </Stack>
                        </Grid>
                      </Grid>
                      <Stack direction="row" jusrifyCotent="center" alignItems="center">
                        <Checkbox />
                        <Typography>I agree to the terms of service and privacy policy. </Typography>
                      </Stack>
                      <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        startIcon={<CheckCircleOutlinedIcon />}
                        sx={{
                          border: "solid 2px #ffb03d",
                          borderRadius: '50px',
                          backgroundColor: "#ffb03d",
                          color: 'white',
                          fontSize: '20px',
                        }}>
                        Submit Your Rating
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </motion.div>
            </Container >
          </ContentStyle >
        </Container >
      </RootStyle >
    </>
  );
}


Profile.propTypes = {
  searchProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchProfile }
)(Profile);
