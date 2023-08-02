const passport = require('passport');
const User = require('../models/userSchema');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsync = require('../middleware/catchAsyncError');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const ErrorHander = require("../utils/ErrorHander");



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
} 
);


passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
}

);  


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

exports.signup =catchAsync( async (req, res,next) => {

    const { name, email, password='64742626An@',username } = req.body;
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

exports.getById=(catchAsync(async (req, res, next) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    return next(new ErrorHander('No user found', 404));
  }
  res.status(200).json({ user: user });
}

));


exports.getAlluser=(catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users) {
    return next(new ErrorHander('No user found', 404));
  }
  res.status(200).json({ users: users });
}
  
  ));


  
