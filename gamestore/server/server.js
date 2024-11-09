require('dotenv').config()
const express = require('express')
const gameRouter = require('./api/game-router')
const server = express()
const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 9000


server.use(express.json())
server.use(cors())
server.use('/gameCollection', gameRouter)



server.get('/api/hello', (req, res) => {
    console.log('API route /api/hello was called');
    res.json({ message: 'Hello from the backend!' });
  });


server.listen(port, () => {console.log(`API running on port ${port}`)})



module.exports = server