const { getAllTopics } = require("../models/topic.model")

exports.controller = (req, res) =>{
    
    const query = req.query
    return getAllTopics(query)
    .then((topics)=>{
        res.status(200).send({topics})
    })
    .catch((err)=>{
        return err
    })
}