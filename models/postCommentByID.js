
exports.postCommentsByID=(data)=>{
    
    const {author, body} = data
    
    return db.query(`
    INSERT INTO Comments (author, body) VALUES ($1, $2, $3) RETURNING *;
    `,
    [author, body])
    .then(({rows})=>(rows[0]))
}