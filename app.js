const express = require('express')
const {getAllTopics}= require("./controllers/topic.controllers")
const {handle500Errors, handleCustomErrors, handle400errors } = require('./controllers/errhandlers')
const {exportEndPoints} = require('./controllers/exportEndPoints')
const { getArticleByID } = require('./controllers/articleByID.controller')
const { articleAllSorted } = require('./controllers/articleAllSorted.controller')
const { getAllComments } = require('./controllers/getAllComments.controller')
const { postComments } = require('./controllers/postComments.controller')

const app = express()

// app.get
app.get('/api/topics', getAllTopics)
app.get('/api', exportEndPoints)
app.get('/api/articles/:article_id', getArticleByID)
app.get('/api/articles', articleAllSorted)
app.get('/api/articles/:article_id/comments', getAllComments)

// app.post

app.post('/api/articles/:article_id/comments', postComments)


//not found
app.all('/*', (req, res, next)=>{
    res.status(404).send({message: "path not found!!"})
})


//error handling middleware
app.use(handleCustomErrors);
app.use(handle400errors)
app.use(handle500Errors);

module.exports = app