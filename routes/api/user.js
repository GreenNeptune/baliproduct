const router = require('express').Router();
const User = require('../../models/User');

const { checkName, checkEmail, checkPassword, doesPasswordExists, isValidated } = require('../../controllers/checkRequest');
const { isRegisteredUser, registeredUser, logUser } = require('../../controllers/userHandler');

/**
 * @route   POST apiV1/users/register
 * @desc    Register new user
 * @access  Public
 * */
router.post('/register', checkName, checkEmail, checkPassword, isValidated, isRegisteredUser, registeredUser);

/**
 * @route   POST apiV1/users/login
 * @desc    Log an existing user
 * @access  Public
 * */
router.post('/login', checkEmail, doesPasswordExists, isValidated, isRegisteredUser, logUser);

module.exports = router;