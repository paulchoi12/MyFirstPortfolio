// the database has to be from the connection


//task 2
const db = require("../db/connection")

exports.getAllTopics = () => {
  return db.query(`
    SELECT slug,
    description FROM topics;`)
    .then((result)=>{
        return result.rows
    })
}
