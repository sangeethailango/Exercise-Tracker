const mongoose = require('mongoose');

const Schema = mongoose.Schema;                             // Schema() is a schema constructor. which is used to create a schemas on the file.

// defining a schema and assigning it to exerciseSchema

const exerciseSchema = new Schema({                         
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: {type: Date},
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);  // Converting exerciseSchema schema into a model and named it Exercise.

module.exports = Exercise;
