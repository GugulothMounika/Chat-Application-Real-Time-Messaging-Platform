const EventEmitter = require("events");
//JS class

const emitter = new EventEmitter();

// <button onclick="f1()">  </button>

//listening the event & Receiving the data
emitter.on("data", (value) => {
  console.log("Data Event Got Trigger", value);
});

emitter.on("data", (dataValue) => {
  console.log("another action", dataValue);
});

//Creating, Triggering the Event & Sending Data
emitter.emit("data", 999);