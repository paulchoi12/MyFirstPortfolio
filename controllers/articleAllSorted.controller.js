const { selectAllArticle } = require("../models/selectAllArticle.model")

//task5
exports.articleAllSorted = (req, res) => {
    selectAllArticle()
    .then((sortedArticles)=>{
        res.status(200).send({sortedArticles})
    })
        .catch((err)=>{
            console.log(err);
        })
}