// index.js

const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`Hello World! ${process.env.ENVIRON}`)
})

module.exports.handler = serverless(app);