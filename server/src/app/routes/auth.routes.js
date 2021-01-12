module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", auth.authenticate);

    app.use('/api/authenticate', router);
};