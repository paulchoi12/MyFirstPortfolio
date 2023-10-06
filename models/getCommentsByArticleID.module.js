const db = require("../db/connection")

//task 6
exports.getCommentsByArticleID = (params) =>{
    
    return db.query(`
    SELECT * 
    FROM comments 
    WHERE comments.article_id = ${params}
    ORDER BY comments.created_at DESC`)
    .then((result)=>{
       return result.rows
    })
}