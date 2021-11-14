const app = require("express")();
const cors = require("cors");
app.use(cors())
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://172.30.197.104:3000"   
  }
});

let nextMsg=1;
let initialMessages = [];
let messages = [];
const addMessage = (data)=>{
  const newMsg = {
    id: nextMsg++,
    author: "Big Brother",
    content: "42!",
    time:new Date().toLocaleTimeString("fr-FR"),
    ...data
  }
  messages.push(newMsg);
  io.emit("listMsg", messages);
  return newMsg;
}

io.on('connection', (socket) => {  
  socket.emit("listMsg", messages)
  addMessage({content:"A new challenger appears!"});

  socket.on("sendMsg", (data) => {
    addMessage(data);
  });

  socket.on("disconnect", () => {
    addMessage({content:"Someone left us tonight..."});
  });
});

app.get("/", (req, res)=>{
  messages = initialMessages;
  io.emit("listMsg", messages);
  res.send("Flush everything!");
})

server.listen(8080, ()=>{
    console.log("API listening on http://localhost:8080")
})