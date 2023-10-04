const {getArticleByID} = require("../models/articleByID.model")

exports.getArticleByID = (req, res) =>{

    const {article_id} = req.params;
    return getArticleByID(article_id)
    .then((articles)=>
    res.status(200).send({articles})
    )
    .catch((err)=>{
        return err
    })
    
}