const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo.routes"); // Import todo routes
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// Use todoRouter for /todos endpoint
app.use("/todos", todoRouter);

app.listen(8080, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nem405");
    console.log("Connected to DB");
  } catch (err) {
    console.error("Failed to connect DB:", err);
  }
  console.log("Server started on port 8080");
});
