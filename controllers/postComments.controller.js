const { getCommentsByArticleID } = require("../models/getCommentsByArticleID.module");
const { postCommentsByID } = require("../models/postCommentByID");



//task 7
exports.postComments= (req ,res) =>{
    const {article_id} = req.params;
    console.log(req.body)
    postCommentsByID(req.body, article_id)
    .then((response)=>{

        res.status(201).send(response)
    }) .catch((err)=>{
        console.log(err)
    })
    
}