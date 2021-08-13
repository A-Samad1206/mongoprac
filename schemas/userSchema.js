const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
};
const nameHis = mongoose.Schema(
  { name: String },
  {
    timestamps: true,
  }
);
const userSchema = mongoose.Schema(
  {
    email: reqString,
    username: reqString,
    password: reqString,
    messages: {
      type: Number,
      default: 5,
      min: 0,
      max: 10,
    },
    nameHistory: [nameHis],
    otherName: {
      nameTwo: String,
      num: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.export = mongoose.model('users', userSchema);
module.export = mongoose.model('newUser', newUserSchema);
