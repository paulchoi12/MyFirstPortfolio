// the database has to be from the connection
const db = require("../db/connection")

exports.getAllTopics = (queryFromURL) => {
    
  return db.query(`
    SELECT slug,
    description FROM topics;`)
    .then((result)=>{
        return result.rows
    })
}