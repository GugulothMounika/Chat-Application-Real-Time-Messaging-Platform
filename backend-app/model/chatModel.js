const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    userIds: [
      { type: String, required: true },
      { type: String, required: true },
    ],
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", ChatSchema);

module.exports = Chat;