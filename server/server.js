const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const  passport  =  require('passport');
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

require("./src/app/routes/auth.routes")(app);
require("./src/app/routes/books.routes")(app);
require("./src/app/routes/customers.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});