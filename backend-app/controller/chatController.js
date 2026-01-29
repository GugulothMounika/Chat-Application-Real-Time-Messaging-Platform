const Chat = require("../model/chatModel.js");

function createNewMessage(req, res) {
  const newMessage = req.body;
  const message = new Chat(newMessage);
  message
    .save()
    .then((resp) => {
      // io.to(data.userIds[0]).to(data.userIds[1]).emit("received-message", message);
      res.send({ ok: true, result: "message sent successfully" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, error: "Failed to Send Message" });
    });
}

function getAllMessage(req, res) {
  const ids = req.params;

  Chat.find({ userIds: { $all: [ids.userId1, ids.userId2] } })
    .sort({ createdAt: 1 })
    .then((resp) => {
      if (resp.length > 0) {
        res.json({ ok: true, result: resp });
      } else {
        throw Error("No Chats between this two users");
      }
    })
    .catch((error) => {
      res.json({ ok: false, error: error.message });
    });
}

module.exports = { createNewMessage, getAllMessage };