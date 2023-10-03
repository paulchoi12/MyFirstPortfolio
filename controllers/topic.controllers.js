const { getAllTopics } = require("../models/topic.model")

exports.getAllTopics = (req, res) =>{
    
    return getAllTopics()
    .then((topics)=>{
        res.status(200).send({topics})
    })
    .catch((err)=>{
        return err
    })
}