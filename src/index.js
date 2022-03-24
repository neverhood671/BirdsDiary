const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const {join} = require('path');
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const diaryRouter = require('./routes/diary');
const userRouter = require('./routes/user')
const observationRouter = require('./routes/observation')
const predictionRouter = require('./routes/prediction')
const recognitionRouter = require('./routes/recognition')
const adapter = new FileSync(join(__dirname, '..', 'db.json'));
const db = low(adapter);
db.defaults({diary: [], user: [], observation: []}).write();
const app = express();
const PORT = 4000;

app.db = db;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());
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