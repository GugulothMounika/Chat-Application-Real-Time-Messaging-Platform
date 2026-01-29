const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const createMongodbConnection = require("./config/mongodbConnection.js");
const AuthRoute = require("./routes/authRoute.js");
const UserRoute = require("./routes/userRoute.js");
const ChatRoute = require("./routes/chatRoute.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/chats", ChatRoute);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (userId) => {
    if (userId) {
      socket.join(userId);
    }
  });

  socket.on("send-message", (data) => {
    if (data) {
      io.to(data.userIds[0]).to(data.userIds[1]).emit("received-message", data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server Started");
  createMongodbConnection();
});