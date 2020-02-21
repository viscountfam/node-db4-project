const express = require('express');

const recipesRouter = require('./recipes/recipe-router.js')

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

module.exports = server;