const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  muscle: {
    type: String,
    required: true,
    trim: true,
  },
  equipment: {
    type: String,
    required: true,
    trim: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
