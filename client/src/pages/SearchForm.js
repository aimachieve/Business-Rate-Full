import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid, Link, Chip } from '@material-ui/core';
// for search input
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// For Google Map API
import Script from 'react-load-script';
import types from '../utils/mock-data/types.js'
// action
import { searchResult } from '../actions/search';
// ----------------------------------------------------------------------

const SearchForm = ({ searchResult, search: { results } }) => {
  const navigate = useNavigate()

  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  console.log("resutls in search component=>", results.length)

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        background: '#314aa5',
        color: '#fff'
      },
    },
  };
  // Store autocomplete object in a ref.
  // This is done because refs do not trigger a re-render when changed.
  const autocompleteRef = useRef(null);
  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['(cities)'],
      componentRestrictions: { country: "us" }
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    autocompleteRef.current = new google.maps.places.Autocomplete(
      document.getElementById('pac-input'),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    autocompleteRef.current.setFields(['address_components', 'formatted_address', 'place_id', 'geometry']);

    // Fire Event when a suggested name is selected
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

  const handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = autocompleteRef.current.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      console.log("addressObject, address", addressObject, address)
      console.log(addressObject.geometry.location.lat())
      console.log(addressObject.geometry.location.lng())
      setLocation(addressObject.geometry.location.lat() + ',' + addressObject.geometry.location.lng());
      setQuery(addressObject.formatted_address);
    }
  };

  const findBusiness = async () => {
    console.log("findBusiness==>", location, type)

    if (location !== '' && type !== '') {
      await searchResult(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=50000&types=${type}&key=AIzaSyCjjz655L5SuMd-IT0q0Pe2nXRlsW4-_qw`)

      navigate('/search')
    } else {
      alert("Please select both of city and business name!")
    }

  }

  return (
    <>
      {/* Google Map API */}
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjjz655L5SuMd-IT0q0Pe2nXRlsW4-_qw&libraries=places"
        onLoad={handleScriptLoad}
      />
      <Grid container spacing={1} justifyContent="space-around" alignItems="center">
        <Grid md={4} item>
          <TextField
            fullWidth
            id='pac-input'
            placeholder="Type here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ borderRadius: '50px', zIndex: 9999 }}
          />
        </Grid>
        <Grid md={4} item>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Business Name, Plumber, HVAC...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Name"
              onChange={(e) => setType(e.target.value)}
              MenuProps={MenuProps}
            >
              {
                types.map((type, index) => (
                  type.type !== "" && <MenuItem key={index} value={type.type} sx={{ backgroundColor: '#29B2FE' }}>{type.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid md={4} item>
          <Button
            fullWidth
            variant="contained"
            onClick={findBusiness}
            size="small"
            startIcon={<SearchOutlinedIcon />}
            sx={{
              border: "solid 2px #ffb03d",
              borderRadius: '50px',
              backgroundColor: "#ffb03d",
              color: 'white',
              fontSize: '20px',
            }}>
            Find Business
          </Button>
        </Grid>
      </Grid>
    </>
  );
}


SearchForm.propTypes = {
  searchResult: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchResult }
)(SearchForm);
