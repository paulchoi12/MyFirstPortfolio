const { getCommentsByArticleID } = require("../models/getCommentsByArticleID.module");
const { postCommentsByID } = require("../models/postCommentByID");



//task 7
exports.postComments= (req ,res) =>{
    const {article_id} = req.params;
    console.log(article_id)
    console.log(req)
    res.status(201).send()
    // postCommentsByID()
    // .then((response)=>{
    //     console.log(response)
    // })
   
}