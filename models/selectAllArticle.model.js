const db = require("../db/connection")


//task 5
exports.selectAllArticle = () =>{
//add all the content to the articles!! Solution!
    return db.query(`
    SELECT 
    articles.article_id, 
    articles.created_at,
    articles.title,
    articles.topic,
    articles.votes,
    articles.article_img_url,
    
    COUNT(*) AS comment_count
    FROM articles 
    LEFT JOIN comments
    ON comments.article_id = articles.article_id
    GROUP BY articles.article_id
    ORDER BY articles.created_at DESC
   `)
    .then((result)=>{
        console.log(result.rows)
        return result.rows
    })
}