const express = require('express')
const {getAllTopics}= require("./controllers/topic.controllers")
const {handle500Errors } = require('./controllers/errhandlers')
const {exportEndPoints} = require('./controllers/exportEndPoints')
const { getArticleByID } = require('./controllers/articleByID.controller')
const app = express()


app.get('/api/topics', getAllTopics)
app.get('/api', exportEndPoints)
app.get('/api/articles/:article_id', getArticleByID)


//not found
app.all('/*', (req, res, next)=>{
    res.status(404).send({message: "path not found!!"})
})


//error handling middleware
app.use(handle500Errors);

module.exports = app