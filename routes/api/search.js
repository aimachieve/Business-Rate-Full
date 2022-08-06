const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');
const axios = require('axios')

// @route    POST api/search
// @desc     Create a post
// @access   Private
router.post(
  '/',
  async (req, res) => { 
    console.log(req.body)
    var config = {
      mode: 'no-cors',
      method: 'get',
      url: req.body.api,
      secure: 'false',
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.results))
        console.log(response.data.results)
        res.json(response.data.results)
      })
      .catch(function (error) {
        console.log(error)
      })

  }
);

// @route    POST api/search/PROFILE
// @desc     Create a post
// @access   Private
router.post(
  '/profile',
  async (req, res) => { 
    var config = {
      mode: 'no-cors',
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.body.placeId}&key=AIzaSyCjjz655L5SuMd-IT0q0Pe2nXRlsW4-_qw`,
      secure: 'false',
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.results))
        res.json(response.data.result)
      })
      .catch(function (error) {
        console.log(error)
      })

  }
);

module.exports = router;
