const db = require('../db/connection')

exports.insertCommentsByArticleID=(newComment)=>{
    const {author, body} = newComment
    return db.query(
        `INSERT INTO comments (author, body) VALUES ($1, $2) RETURNING *;`,
        [author, body]
      )
      .then((response)=> {
        return response.rows
      })
};
