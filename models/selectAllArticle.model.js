const db = require("../db/connection")

exports.selectAllArticle = () =>{

    return db.query(`
    SELECT comments.article_id, COUNT(*) AS comment_count
    FROM comments 
    LEFT JOIN articles
    ON comments.article_id = articles.article_id
    GROUP BY comments.article_id
   `)
    .then((result)=>{
        console.log(result.rows)
        return result.rows
    })
}