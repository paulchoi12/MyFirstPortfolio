const { deleteCommentsByID } = require("../models/deleteCommentsByID")

exports.deleteComments=(req, res)=>{
    console.log("from controller")
    const {comment_id}= req.params
   

    deleteCommentsByID(comment_id)
    .then((response)=>{
        res.status(204).send(response)
    })
}