//get database using connnection
const db = require("../db/connection")

exports.selectArticleByID=(article_id)=>{

    return db.query(`
    SELECT slug,
    description FROM topics;`)
    .then((result)=>{
        console.log(result);
        return result.rows
    })


//     const query = `SELECT * FROM articles`;
//     return db.query(`SELECT * FROM articles;`).then(({ rows: article }) => {
//         console.log('it works!')
//         if (!article.length) {
//             return Promise.reject({ status: 404, msg: 'Article does not exist!' })
//         };
//         return article[0];
// }
}