const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

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
            debugger

            return done(null, user)
        }
    ));
}

module.exports = {
    comparePassword,
    configurePassport
}