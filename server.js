const express = require("express");
const app = express();
const mainRoutes = require('./routes/main');

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
