const express = require('express')
const {controller}= require("./controllers/topic.controllers")
const app = express()


app.get('/api/topics', controller)

module.exports = app