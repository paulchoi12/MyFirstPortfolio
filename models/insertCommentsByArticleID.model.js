const db = require('../db/connection')

exports.insertCommentsByArticleID=(newComment)=>{
    const {author, body} = newComment
    return db.query(
        `INSERT INTO comments (username, body) VALUES ($1, $2, $3) RETURNING *;`,
        [author, body]
      )
      .then((response)=> {
        return response.rows
      })
};
