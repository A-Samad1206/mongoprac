const mongoose = require('mongoose');
const mongoPath = `mongodb://localhost:27017/practice`;

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  return mongoose;
};
