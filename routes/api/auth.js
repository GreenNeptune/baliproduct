const router = require('express').Router();

const { isValidToken, resendToken } = require('../../controllers/authHandler');
const { sendUserById, isRegisteredUser } = require('../../controllers/userHandler');
const { checkEmail, doesPasswordExists, isValidated } = require('../../controllers/checkRequest');

/**
 * @route   GET apiV1/auth
 * @desc    Get user's details
 * @access  Private
 * */
router.get('/', isValidToken, sendUserById);

/**
 * @route   POST apiV1/auth
 * @desc    Authenticate & Validate
 * @access  Public
 * */
router.post('/', checkEmail, doesPasswordExists, isValidated, isRegisteredUser, resendToken);

module.exports = router;