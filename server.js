const express = require("express");
const router = require("express").Router();
//const path = require("path");
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

const path = require("path")
const app = express();


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

app.set("view engine", "ejs");


app.use(cors())

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

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
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }

)

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});