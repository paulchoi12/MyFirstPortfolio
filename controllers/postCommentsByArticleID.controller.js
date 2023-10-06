const { insertCommentsByArticleID } = require("../models/insertCommentsByArticleID.model")


exports.postCommentsByArticleID=(req, res)=>{
    const {article_id} = req.params
    console.log()
    insertCommentsByArticleID(article_id)
    .then((comment)=>{
        res.status(201).send(({comment}))
    })
}