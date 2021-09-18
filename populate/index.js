const express = require('express');
const app = express();
const mongo = require('../db/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: { type: String, unique: true },
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

app.get('/one', async (_req, res) => {
  try {
    let author = new Person({
      name: 'Ian Fleming',
      age: 50,
    });
    let story = await new Story({
      title: 'Casino Royale',
      author: author._id,
    });
    author = await author.save();
    story = await story.save();
    res.json(story);
  } catch (err) {
    console.log('Error =======================');
    console.log(err);
    console.log('Error End ===================');
  }
});
app.get('/list', async (req, res) => {
  try {
    let story = await Story.find({
      title: 'Casino Royale',
    }).populate('author');
    res.json(story);
  } catch (err) {
    console.log('Error List =======================');
    console.log(err);
    console.log('Error End List ===================');
  }
});
mongo().then(app.listen(6000, console.log('Server is running on port 6000')));
