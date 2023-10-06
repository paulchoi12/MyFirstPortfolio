const endPointsObj = require('../endpoints.json')


//task 3
exports.exportEndPoints=(req, res)=>{
    
        res.status(200).send(endPointsObj)
    
}
