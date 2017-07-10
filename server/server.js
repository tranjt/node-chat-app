const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname,  "../public");
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(publicPath));


io.on("connection", (socket) => {
    console.log("New user connected");

               
    socket.on("createMessage", (message) => {
        console.log("createMessage", message);
        // emit to all connections
        io.emit("newMessage", {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    // // emit to single connections
    // socket.emit("newMessage", {
    //     from: "my server",
    //     text: "test123",
    //     createdAt: 123
    // });

    socket.on("disconnect", () => {
        console.log("client was diconnected");
    });

});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});