const express = require('express')
const {getAllTopics}= require("./controllers/topic.controllers")
const { handle404Errors, handle500Errors } = require('./controllers/err.controler')
const app = express()


app.get('/api/topics', getAllTopics)

//not found
app.all('/*', (req, res, next)=>{
    res.status(404).send({message: "path not found!!"})
})

//error handling middleware
app.use(handle500Errors);

module.exports = app