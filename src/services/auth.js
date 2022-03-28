const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;


function isLoggedIn () {
    return (req, res, next) => {
        // if there is a logged in user, do the next thing, and execute the
        // function for the route
        if (req.isAuthenticated()) { return next() };

        // if there isn't a login user, skip the function for the route, and
        // redirect to the login page
        return res.redirect('/login')
    }
}

function isLoggedOut () {
    return (req, res, next) => {
        // if there isn't a login user, execute the function for the route
        if (!req.isAuthenticated()) { return next() };

        // if there is a logged in user, redirect
        return res.redirect('/')
    }
}

function comparePassword(plaintextPassword, hashPassword) {
    return bcrypt.compareSync(plaintextPassword, hashPassword);
}

function configurePassport(passport, db) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        const user = db.get('user').find({id: id}).value()

        if (!user) {
            done({message: 'Invalid credentials.'}, null);
        } else {
            done(null, {id: user.id, username: user.username})
        }
    });

    passport.use(new LocalStrategy(
        function (username, password, done) {
            const user = db.get('user').find({username}).value()
            if (!user) {
                return done(null, false, {message: 'Invalid username or password.'});
            }

            const passwordsMatch = comparePassword(password, user.password);
            if (!passwordsMatch) {
                return done(null, false, {message: 'Invalid username or password.'});
            }

            return done(null, user)
        }
    ));
}

module.exports = {
    isLoggedOut,
    isLoggedIn,
    comparePassword,
    configurePassport
}