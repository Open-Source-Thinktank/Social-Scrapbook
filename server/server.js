const express = require('express');

const app = express();
const path = require('path');
const apiRouter = require('./routers/api');
const cookieParser = require('cookie-parser');

// BODY PARSERS
app.use(express.json());
app.use(express.urlencoded());

// SERVE UP INITIAL HTML & STATIC FILES

app.use('/dist', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// API ROUTER

app.use('/api', apiRouter);

// HANDLING UNKNOWN URLS

app.use('*', (req, res) => {
  res.status(404).send('URL path not found');
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
