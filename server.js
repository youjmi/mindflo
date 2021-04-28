require("dotenv").config({ path: "./config.env" });

// const connectDB = require("./config/db")

// connectDB()

const express = require("express");
const router = require("express").Router();
const path = require("path");
const cors = require("cors");
// const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
// const session = require("express-session");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const routesblog = require("./routes/blog");
const routesdashboard= require("./routes/dashboard");
const routesuser= require("./routes/user");
// const routeshtml = require("./routes/html")

const errorHandler = require("./middleware/error")

const app = express()


// const User = require("./models/User");
// const db = require("./models")



const PORT = process.env.PORT || 3001; 

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);
 


app.set("view engine", "ejs");


app.use(cors())

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(express.static(__dirname));

app.use(routesblog);
app.use(routesdashboard);
app.use(routesuser);
// Add routes, both API and view
 //app.use(routes);
// require("./routes/dashboard")(app)
// require("./routes/blog")(app)
// require("./routes/user")(app)
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// router.use(routesblog);
// router.use(routesdashboard);
// router.use(routesuser);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mindflo",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }

)

// Start the API server
const server = app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});

