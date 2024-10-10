const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const reviewRouter = require('./routes/review-router');

const app = express();
const apiPort = 5010;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', reviewRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));