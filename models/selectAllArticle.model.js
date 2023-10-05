const db = require("../db/connection")

exports.selectAllArticle = () =>{
    const countedTable = db.query(`
    SELECT article_id, COUNT(*) FROM comments
    GROUP BY article_id
    `)

    return db.query(`
    SELECT article_id, COUNT(*) FROM comments
    GROUP BY article_id 
    JOIN articles ON article.article_id = comments.article_id

   `)
    .then((result)=>{
        console.log(result.rows)
        return result.rows
    })
}