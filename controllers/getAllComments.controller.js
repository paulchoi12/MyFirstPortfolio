const { getCommentsByArticleID } = require("../models/getCommentsByArticleID.module");

exports.getAllComments = (req, res) =>{
    const {article_id} = req.params;
    
    getCommentsByArticleID(article_id)
    .then((comments)=>{
        res.status(200).send({comments})
    }).catch((err)=>{
        return err
    })
}