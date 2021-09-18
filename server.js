const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongo = require('./db/db');
const User = require('./schemas/ultraSchema');

app.get('/one', async (_req, res) => {
  try {
  } catch (err) {}
});
app.get('/list', async (req, res) => {});
mongo().then(app.listen(6000, console.log('Server is running on port 6000')));
