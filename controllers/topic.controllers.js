const { getAllTopics } = require("../models/topic.model")

exports.controller = (req, res) =>{
    console.log('from controller');
    const query = req.query
    return getAllTopics(query)
    .then((topics)=>{
        res.status(200).send({topics})
    })
    .catch((err)=>{
        console.log(err)
    })
}