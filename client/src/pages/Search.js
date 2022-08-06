import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid, Link, Chip } from '@material-ui/core';
// routes
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
// action
import { searchResult } from '../actions/search';
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

const Search = ({ searchResult, search: { results } }) => {
  console.log(results)
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Container>
              <motion.div variants={varWrapEnter} style={{ color: "#29B2FE", }}>
                <Icon icon={homeFill} /> / Search Result
              </motion.div>
              <Container sx={{ mt: 5 }}>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ fontFamily: 'PoppinsBold', fontSize: 35, color: '#0b4064', textAlign: 'center' }}>
                    Top Rated Local® Los Angeles Acupuncturists
                  </Typography>
                  <Typography sx={{ fontFamily: 'Poppins', fontSize: 20, color: '#0b4064', textAlign: 'center' }}>
                    Last updated May 2022
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, color: "#173858", }}>
                    Showing 1-{results.filter((result) => result.rating > 0).length > 10 ? 10 : results.filter((result) => result.rating > 0).length} of {results.filter((result) => result.rating > 0).length} Items.
                  </Typography>
                  {
                    results.length > 0 ? results.filter((result) => result.rating > 0).sort((a, b) => b.rating > a.rating ? 1 : -1).slice(0, 20).map((result, index) => (
                      <Grid key={index} container spacing={2} sx={{ width: 1, mt: 2, border: '1px solid #f0f0f0' }} justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={12} md={3}>
                          <img src={result.icon} alt="business_logo" style={{ margin: "auto" }} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <Stack spacing={3}>
                            <Link to="#" sx={{ fontFamily: 'PoppinsBold', color: "#0d7abc", fontSize: 30, cursor: 'pointer' }}>
                              {`${index + 1}. ${result.name}`}
                            </Link>
                            <Chip label={`${(result.rating / 5 * 100).toFixed(2)} Rating Score ™`} color='primary' sx={{ width: '200px' }} />
                            <Typography sx={{ color: "#0a4063", fontSize: 20 }}>
                              {`Of ${result.user_ratings_total} ratings/reviews posted on verified review sites, this business has an average rating of ${result.rating} stars. This earns them a Rating Score™ of ${(result.rating / 5 * 100).toFixed(2)} which ranks them #${index + 1} in the ${result.formatted_address} area.`}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Stack direction={'column'} justifyContent={'flex-start'} alignItems="center" spacing={3} p={2}>
                            <Button
                              href={`/profile/${result.place_id}`}
                              variant='contained'
                              fullWidth
                              sx={{
                                borderRadius: '50px',
                                height: '50px',
                                fontSize: '20px'
                              }}>
                              View Profile
                            </Button>
                            <Button variant='outlined' href={`/review/${result?.place_id}`} fullWidth sx={{
                              borderRadius: '50px',
                              height: '50px',
                              fontSize: '20px'
                            }}>
                              Rate Business
                            </Button>
                          </Stack>
                        </Grid>
                      </Grid>
                    )) :
                      <Typography variant="h4">No companies found...</Typography>
                  }
                </motion.div>
              </Container>
            </Container>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}


Search.propTypes = {
  searchResult: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchResult }
)(Search);
