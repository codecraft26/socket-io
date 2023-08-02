const app= require('./app');
const connectToDatabase = require('../server/config/databsase');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const errorMiddleware = require("../server/middleware/error");
const port = process.env.PORT || 5000;
connectToDatabase();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Middleware for Errors
app.use(errorMiddleware);

//just t check if server is running
app.get('/',(req,res)=>{


  res.send("server is running")
}
)