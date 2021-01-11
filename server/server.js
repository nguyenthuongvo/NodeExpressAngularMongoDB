const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const  passport  =  require('passport');
const  LocalStrategy  =  require('passport-local').Strategy;
const app = express();

const db = require("./src/app/model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    console.log(db.mongoose.modelNames());
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(passport.session());

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
      return next()
  }
  return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}


const auth = () => {
  return (req, res, next) => {
      passport.authenticate('local', (error, user, info) => {
          if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
          req.login(user, function(error) {
              if (error) return next(error);
              next();
          });
      })(req, res, next);
  }
}

app.post('/api/authenticate', auth() , (req, res) => {
  res.status(200).json({"statusCode" : 200 ,"message" : "hello"});
});

passport.use(new LocalStrategy(
  function(username, password, done) {
      if(username === "admin" && password === "admin"){
          return done(null, username);
      } else {
          return done("unauthorized access", false);
      }
  }
));

passport.serializeUser(function(user, done) {
  if(user) done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

require("./src/app/routes/books.routes")(app);
require("./src/app/routes/customers.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});