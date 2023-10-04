const endPointsObj = require('../endpoints.json')



exports.exportEndPoints=(req, res)=>{
    
        res.status(200).send(endPointsObj)
    
}
