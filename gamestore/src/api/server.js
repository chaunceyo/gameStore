const express = require('express')
const gameRouter = require('./game-router')
const server = express()

server.use(express.json())

server.use('./api/games', gameRouter)

module.exports = server