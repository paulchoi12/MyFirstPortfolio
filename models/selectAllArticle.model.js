const db = require("../db/connection")


//task 5
exports.selectAllArticle = () =>{
//add all the content to the articles!! Solution!
    return db.query(`
    SELECT articles.article_id, articles.created_at, COUNT(*) AS comment_count
    FROM articles 
    LEFT JOIN comments
    ON comments.article_id = articles.article_id
    GROUP BY articles.article_id
   `)
    .then((result)=>{
        console.log(result.rows)
        return result.rows
    })
}