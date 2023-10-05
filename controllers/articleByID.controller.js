const {selectArticleByID} = require("../models/selectArticleByID.model")

exports.getArticleByID = (req, res) =>{

    const {article_id} = req.params;
    selectArticleByID(article_id)
    .then((article)=>{
    console.log(article, "controller"),
    res.status(200).send({article})
})
    .catch((err)=>{
        console.log(err);
    })
}
