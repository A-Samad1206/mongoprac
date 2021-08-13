const mongo = require('./mongo');
const express = require('express');
const User = require('./schemas/userSchema');
const app = express();

app.get('/minmax', async (req, res) => {
  try {
    const newUser = await new User({
      email: 'test@gmal.com',
      username: 'test',
      password: 'testpassword',
      messages: 10,
      nameHistory: {
        name: 'myname',
        time: new Date(),
      },
      otherName: {
        nameTwo: 'Name Two',
        num: 2555,
      },
    }).save();
    res.json(newUser);
  } catch (err) {
    console.log('Err', err);
  }
});

mongo().then(app.listen(6000, console.log('Server is running')));
