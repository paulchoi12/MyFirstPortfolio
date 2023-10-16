const db = require('../db/connection');

exports.postCommentsByID=(data, article_id)=>{

    const {username, body} = data
    
    return db.query(`
    INSERT INTO Comments (author, body, article_id) VALUES ($1, $2, $3) RETURNING *;
    `,
    [username, body, article_id])
    .then(({rows})=>{
        return rows[0]
    })
   
}