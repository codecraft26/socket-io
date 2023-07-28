const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
if(process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config/config.env'});
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());



//route import 
const userRouter = require('./router/userRouter');



app.use('/api/v1', userRouter);

module.exports = app;