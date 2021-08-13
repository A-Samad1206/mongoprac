// const mongo = require('./mongo');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  age: String,
  _id: String,
});

//Instance methods
userSchema.methods.det = function () {
  return this;
};

//static methods
userSchema.statics.sta = function () {
  return this;
};

//Query helpers

//Virtuals

userSchema.virtual('names').get(function () {
  console.log('From Virtauls', this);
  return `${this.name} ${this.age}`;
});

userSchema.pre('init', function () {
  console.log('Init');
});

const User = mongoose.model('user', userSchema);

const user = new User({
  name: 'sd',
  age: '25',
  id: 21456,
});

console.log('Pre', user.det(), 'User', user);
