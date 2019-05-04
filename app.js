const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./config/keys').mongoURI;
const user = require('./controller/user');
const auction = require('./controller/auction');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/user', user);
app.use('/auction', auction);

app.listen(port, () => console.log(`Server running on port ${port}`));
