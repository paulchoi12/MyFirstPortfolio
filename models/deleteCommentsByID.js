const db = require("../db/connection")

exports.deleteCommentsByID=(comment_id)=>{
    return db.query(`
        DELETE FROM comments
        WHERE comment_id = ${comment_id}
        RETURNING *;
    `)
    .then(({rows})=>{
        return rows[0]
    })
}