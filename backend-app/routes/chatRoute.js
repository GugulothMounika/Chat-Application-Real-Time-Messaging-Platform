const { Router } = require("express");
const {
  createNewMessage,
  getAllMessage,
} = require("../controller/chatController");
const route = Router();

route.post("/new-message", createNewMessage);
// http://localhost:3000/api/chats/new-message

route.get("/get-all-messages/:userId1/:userId2", getAllMessage);
// http://localhost:3000/api/chats/get-all-messages/id1/id2

module.exports = route;