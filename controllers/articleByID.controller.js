const {selectArticleByID} = require("../models/selectArticleByID.model")

exports.getArticleByID = (req, res) =>{

    const {article_id} = req.params;
    selectArticleByID(article_id)
    .then((article)=>{
    res.status(200).send({article})
})
    .catch((err)=>{
        console.log(err);
    })
}
