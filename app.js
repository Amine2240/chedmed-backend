

const express = require("express")
const app = express()
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);
require('dotenv').config();

app.get('/api', function (req, res) {
    res.send("welcom to my server");
})
//routes importing
const chatBotRouter = require("./routes/chatBot");
const { configDotenv } = require("dotenv");
//
app.use(cors());
app.use(express.json());

// routes 
app.use("/api", chatBotRouter);

const Port = process.env.PORT || 3001


const start = async () => {

    server.listen(Port, () => {
        console.log(`Server is running on http://localhost:${Port}`);
    });
}
start();