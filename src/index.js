const express = require("express");
const low = require("lowdb");
const passport = require('passport');
const FileSync = require("lowdb/adapters/FileSync");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const store = require('connect-nedb-session')(session);
const flash = require('connect-flash');
const {join} = require('path');
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const diaryRouter = require('./routes/diary');
const userRouter = require('./routes/user')
const observationRouter = require('./routes/observation')
const predictionRouter = require('./routes/prediction')
const recognitionRouter = require('./routes/recognition')
const {configurePassport} = require("./services/auth");

const adapter = new FileSync(join(__dirname, '..', 'db.json'));
const db = low(adapter);
db.defaults({diary: [], user: [], observation: []}).write();
const app = express();
const PORT = 4000;
configurePassport(passport, db)
app.db = db;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new store({filename: join(__dirname, '..', 'sessionFile.json')}),}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/diary', diaryRouter);
app.use('/observation', observationRouter);
app.use('/user', userRouter);
app.use('/prediction', predictionRouter);
app.use('/recognition', recognitionRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

async function initialize() {
    app.listen(PORT);
}

initialize()
    .finally(
        () => console.log(`app started on port:${PORT}`)
    );