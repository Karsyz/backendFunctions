const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const cors = require('cors');

const mainRoutes = require('./routes/main');
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const grammasterRoutes = require('./routes/grammaster');
const reactPracticeRoutes = require('./routes/reactPractice');
const potLuckRoutes = require('./routes/potLuck');

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

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
// app.options('*', cors())
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers', 
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// app.use(cors({credentials: true, origin: 'http://localhost:3115'}));
// app.use(cors({credentials: true, origin: 'http://127.0.0.1:5173'}));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(session({
  secret: "keyboard catzzz",
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 60 * 60 * 1000,
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.use("/grammaster", grammasterRoutes);
app.use("/reactPractice", reactPracticeRoutes)
app.use("/potLuck", potLuckRoutes)

// //Server Running
// app.listen(process.env.PORT, () => {
//   console.log(`Server is listening on port ${process.env.PORT}`);
// });
