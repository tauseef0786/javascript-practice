const http =require("http")
const express = require("express")
const {Server} = require("socket.io")
 
const app = express();

const server = http.createServer(app);
const io = new Server()

express.static("public")

server.listen(9000,()=>{
    console.log("server connected")
})