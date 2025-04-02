const express = require('express');
const bodyParser = express.json();
const {errorHandler} = require('./middlewares/errorHandler');
const apiRouter = require('./routes/apiRouter');


const app = express();

app.use(bodyParser);
app.use('/api', apiRouter);

app.use(errorHandler);



module.exports = app;