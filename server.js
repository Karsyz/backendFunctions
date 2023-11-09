const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require("express-flash");
const logger = require("morgan");
const cors = require('cors');
const mainRoutes = require('./routes/main');
const apiRoutes = require('./routes/api');
const grammasterRoutes = require('./routes/grammaster');

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
// Deploy on cyclic requires .then notation because serverless
mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
})
.then(() => {
  // listen for requests
  app.listen(process.env.PORT || 3000,  () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
  })
})
.catch((error) => {
  console.log(error)
})

// cors options
app.options('*', cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

// Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/api", apiRoutes);
app.use("/grammaster", grammasterRoutes);

// //Server Running
// app.listen(process.env.PORT, () => {
//   console.log(`Server is listening on port ${process.env.PORT}`);
// });
