//get database using connnection
const db =require("../db/connection")

exports.getArticleByID=(article_id)=>{
    
    return db.query(`
    SELECT * FROM articles WHERE article_id = $1;
    `, [article_id])
    .then((result)=>{
        result.rows[0]
        console.log(result.rows[0])
    })
}