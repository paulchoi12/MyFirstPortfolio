const { selectAllArticle } = require("../models/selectAllArticle.model")


exports.articleAllSorted = (req, res) => {
    selectAllArticle()
    .then((sortedArticles)=>{
        res.status(200).send({sortedArticles})
    })
        .catch((err)=>{
            console.log(err);
        })
}