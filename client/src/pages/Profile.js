import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid, Link, Chip } from '@material-ui/core';
// routes
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
// action
import { searchProfile } from '../actions/search';
// icon
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
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
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(35),
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
                <Grid container spacing={2} sx={{ width: 1, mt: 2 }} justifyContent={'center'} alignItems={'center'}>
                  <Grid item xs={12} md={3}>
                    <img src={profile?.icon} alt="business_logo" style={{ margin: "auto" }} />
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <Stack spacing={3}>
                      <Link to="#" sx={{ fontFamily: 'PoppinsBold', color: "#0d7abc", fontSize: 30, cursor: 'pointer' }}>
                        {profile?.name}
                      </Link>
                      <Chip label={`${(profile?.rating / 5 * 100).toFixed(2)} Rating Score ™`} color='primary' sx={{ width: '200px' }} />
                      <Typography sx={{ color: '#29B2FE', fontSize: 18 }}>{profile?.types.map((name) => name).join(', ')}</Typography>
                      <Typography sx={{ color: "#0a4063", fontSize: 20 }}>
                        {
                          `Of ${profile?.user_ratings_total} reviews posted, ${profile?.name} has an average rating of ${profile?.rating} stars`
                        }
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant='contained' href={`/review/${profile?.place_id}`} startIcon={<StarBorderPurple500OutlinedIcon />} fullWidth sx={{
                          height: '50px',
                          fontSize: '20px',
                          border: "solid 2px #ffb03d",
                          borderRadius: '50px',
                          backgroundColor: "#ffb03d",
                          color: 'white',
                        }}>
                          Rate
                        </Button>
                        <Button variant='outlined' target="_blank" href={profile?.website} startIcon={<LaunchOutlinedIcon />} fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '20px'
                        }}>
                          Website
                        </Button>
                        <Button variant='outlined' href={`tel: ${profile?.international_phone_number}`} startIcon={<PhoneIphoneOutlinedIcon />} fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '20px'
                        }}>
                          Call Now
                        </Button>
                        <Button variant='outlined' href={profile?.url} target="_blank" startIcon={<PlaceOutlinedIcon />} fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '20px'
                        }}>
                          Location
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </ContentStyle>
        </Container>
      </RootStyle>
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
