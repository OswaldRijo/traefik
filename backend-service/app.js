require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.get(`/${process.env.VERSION || 'v1'} /health`, (req, res) => {
  res.send(`${process.env.COUNTRY} - ${process.env.VERSION || 'v1'} up and running.`);
});

app.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).send({ code: 'error', message: err.message });
});

module.exports = app;
