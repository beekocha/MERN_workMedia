const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    POST api/friends
// @desc     Add friends
// @access   Private
router.get('/friends', auth,
    [
        check.apply()
    ])