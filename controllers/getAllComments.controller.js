const { getCommentsByArticleID } = require("../models/getCommentsByArticleID.module");
const {selectArticleByID} = require("../models/selectArticleByID.model")

//task 6
exports.getAllComments = (req, res, next) =>{
    const {article_id} = req.params;
    return selectArticleByID(article_id)
    .then(()=>{
    return getCommentsByArticleID(article_id)
    })
    .then((comments)=>{
        res.status(200).send({comments})
    })
    .catch((err)=>{
 
        return next(err)
    })
}