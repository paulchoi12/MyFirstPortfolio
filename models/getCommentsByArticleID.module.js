const db = require("../db/connection")

//task 6
exports.getCommentsByArticleID = (article_id) =>{
    
    return db.query(`
    SELECT * 
    FROM comments 
    WHERE comments.article_id = ($1)
    ORDER BY comments.created_at DESC`,
    [article_id])

    .then((result)=>{
       return result.rows
    })
}