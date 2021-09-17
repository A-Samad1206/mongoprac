const mongo = require('./mongo');
const express = require('express');
const User = require('./schemas/userSchema');
const app = express();
const mongoose = require('mongoose');
app.get('/arrobj', async (_req, res) => {
  try {
    let newUser = new User({
      name: 'test',
      obj: {
        one: 'First',
        two: 1,
      },
      arr: [{ name: 'abc' }, { name: 'def' }, { name: 'ghi' }],
    });
    // console.log('NewUser', newUser);
    newUser = await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.log('=====================');
    console.log('Err', err);
    res.json({ msg: err.message });
  }
});
app.get('/valid', async (_req, res) => {
  try {
    let newUser = await User.create({
      name: 'abduss',
    });
    // newUser = await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.log('=====================');
    console.log('Err', err);
    res.json({ msg: err.message });
  }
});
app.get('/list', async (req, res) => {
  const newUser = await User.find({});
  res.json(newUser);
});
mongo().then(app.listen(6000, console.log('Server is running')));
