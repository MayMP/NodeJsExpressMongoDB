const mongoose = require("mongoose");

var interviewSchema = new mongoose.Schema({
  title: {
    type: String
  },
  message: {
    type: String
  },
  status: {
    type: String
  }
});

mongoose.model("Post", interviewSchema);