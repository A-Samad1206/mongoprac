const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'publisher'],
      message: '{VALUE} is not supported',
    },
    default: 'user',
  },
});

user.path('name').validate(async (name) => {
  const length = name?.trim().split(' ').join('').length;
  return length > 5 ? true : false;
}, 'Name must of minimum 5 characters long!');

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  console.log('Pre Save hook run...');
  next();
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  console.log('getSignedJwtToken run!', this);
};

module.exports = mongoose.model('User', UserSchema);
