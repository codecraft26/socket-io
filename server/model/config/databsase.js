const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './config/config.env' });




const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  
    });
    console.log('Connected to database');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToDatabase;