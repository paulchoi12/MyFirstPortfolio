// the database has to be from the connection
const db = require("../db/connection")

exports.getAllTopics = (queryFromURL) => {
    
  return db.query(`
    SELECT slug,
    description FROM topics;`)
    .then((result)=>{
        console.log(result.rows, 'MODEL')
        return result.rows
    })
}