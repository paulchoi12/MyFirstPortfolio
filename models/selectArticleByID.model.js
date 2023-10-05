//get database using connnection
const db = require("../db/connection")

exports.selectArticleByID=()=>{
    const query = `SELECT * FROM articles`;
    return db.query(`SELECT * FROM articles;`).then(({ rows: article }) => {
        
        if (!article.length) {
            return Promise.reject({ status: 404, msg: 'Article does not exist!' })
        };
        return article[0];
})
}
