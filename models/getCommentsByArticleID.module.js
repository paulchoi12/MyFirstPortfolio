const db = require("../db/connection")


exports.getCommentsByArticleID = (params) =>{
    
    return db.query(`
    SELECT * 
    FROM comments 
    WHERE comments.article_id = ${params}
    ORDER BY comments.created_at DESC`)
    .then((result)=>{
        console.log(result.rows);
       if(!result.rows.length){
        return Promise.reject({status: 400, msg:"wrong input"})
       }
       return result.rows
    })

}