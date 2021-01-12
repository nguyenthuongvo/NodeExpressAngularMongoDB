const  passport  =  require('passport');
const  LocalStrategy  =  require('passport-local').Strategy;

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}
  

exports.auth = () => {
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

exports.authenticate = (req, res) => {
    res.status(200).json({"statusCode" : 200 ,"message" : {"data" : {"user" : "root"}}});
};

passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username === "root" && password === "root"){
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


