const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
};

const arrH = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
const obj = new mongoose.Schema(
  { one: String, two: Number },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, 'Please add a name'],
      unique: true,
      // trim: true,
      // maxlength: [50, 'Name can not be more than 50 characters'],
      // validate: (x) => {
      //   console.log('XXXXX', x);
      //   return true;
      // },
    },
    arr: [arrH],
    obj: obj,
  },
  {
    timestamps: true,
  }
);
const user = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'It is required'],
    unique: true,
  },
});
// user.path('name').validate(async (name) => {
//   console.log('namename', name);
//   let len = name?.trim().split(' ').join('').length;
//   console.log('length', len);
//   // return len <= 5 && false;
//   if (name === 'abdus') return false;
//   if (len <= 5) return false;
//   else true;
// const nameCount = await mongoose.models.users.countDocuments({ name });
// console.log('nameCount', nameCount);
// return nameCount ? false : true;
// }, 'Email already exist');
module.exports = mongoose.model('users', user);
