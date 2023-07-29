const passport = require('passport');
const User = require('../models/userSchema');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsync = require('../middleware/catchAsyncError');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const ErrorHander = require("../utils/ErrorHander");

 
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

exports.signup =catchAsync( async (req, res,next) => {

    const { name, email, password,username } = req.body;
    if (!password || typeof password !== 'string') {
     return next (new ErrorHander('Please provide a valid  password', 400));
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return next (new ErrorHander('User already exists', 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      username:username
    });
    await newUser.save();
    const token = generateToken(newUser._id);
    res.status(201).json({ token: token,newUser });
});

exports.login =catchAsync( async (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    
    if (!user) {
      return next(new ErrorHander('No user found', 404));
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      const token = generateToken(user._id);
      res.status(200).json({ token: token, user: user });
    });
  })(req, res, next);
});