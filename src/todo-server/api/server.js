const express = require("express");
const server = express();
const cors = require('cors')
const helmet = require('helmet')
server.use(cors());
server.use(helmet());
server.use(express.json());
const db = require('./dbConfig')

server.get("/", (req, res) => {
  res.send("Welcome to the todo app server");
});

server.get('/todos', async (req, res) => {
try{
    const todos = await db('todos')
    res.json(todos)
}catch(err){
    console.log(err)

}
})

server.post('/todos', (req, res) => {

})

server.put("/todos:id", (req, res) => {});
server.delete("/todos:id", (req, res) => {});

module.exports = server;