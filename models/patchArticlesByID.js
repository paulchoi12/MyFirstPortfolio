const db = require('../db/connection');
exports.patchArticlesByID=(data, article_id)=>{
    const votes = data.inc_votes
    console.log(data ,"from model")

    return db.query(`
    UPDATE articles  SET votes = votes + ${votes}
    WHERE article_id = ${article_id} RETURNING *;
    `)
    .then(({rows})=>{
        console.log(rows[0])
        return rows[0]
    })
    //learn how to prevent sql injection on updating values
    
}