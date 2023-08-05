const catchAsyncError= require('./catchAsyncError');
const ErrorHander = require("../utils/ErrorHander");
const jwt = require("jsonwebtoken");

const User =require('../models/userSchema')

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  
    if (!token) {
      return next(new ErrorHander("Please Login to access this resource", 401));
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decodedData.id);
  
    next();
  });


  