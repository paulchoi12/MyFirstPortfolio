const { insertCommentsByArticleID } = require("../models/insertCommentsByArticleID.model")


exports.postCommentsByArticleID=(req, res)=>{
    console.log(req.body)
    insertCommentsByArticleID(req.body)
    .then((comment)=>{
        res.status(201).send(({comment}))
    })
}