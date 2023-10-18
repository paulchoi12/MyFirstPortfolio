const { patchArticlesByID } = require("../models/patchArticlesByID")


exports.patchArticles=(req, res)=>{
    const {article_id} =req.params
    console.log(req.body, article_id)

    patchArticlesByID(req.body, article_id)
    .then((response)=>{
        res.status(201).send(response)
    }).catch((err)=>{
        console.log(err)
    })
    
}