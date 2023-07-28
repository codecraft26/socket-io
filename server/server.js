const app= require('./app');
const connectToDatabase = require('../server/config/databsase');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;
connectToDatabase();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




//just t check if server is running
app.get('/',(req,res)=>{


  res.send("server is running")
}
)