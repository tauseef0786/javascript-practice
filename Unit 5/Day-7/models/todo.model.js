const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean, default: false },
  description: String,
  deadline: String,
  user: String,
  gender: { type: String, enum: ["male", "female"] },
  age: { type: Number, min: 20, max: 100 },
});

const todoModel = mongoose.model("todos", TodoSchema);

module.exports = todoModel;
