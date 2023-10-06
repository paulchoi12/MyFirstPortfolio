//task 4

const db = require("../db/connection")

exports.selectArticleByID=(article_id)=>{
    return db.query(`SELECT * FROM articles WHERE article_id = ${article_id};`).then(({ rows: article }) => {
        
        if (!article.length) {
        
            return Promise.reject({ status: 404, msg: 'Article does not exist!' })
        };
        return article[0];
})
}
