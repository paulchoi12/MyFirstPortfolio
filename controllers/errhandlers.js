exports.handleCustomErrors= (err,req,res,next)=>{
    if(err.status && err.msg){
        res.status(err.status).send({message: err.msg})
    }
    
    return next(err)
    };

exports.handle400errors= (err, req, res, next) =>{
    
    res.status(400).send({message: "invalid id!"})
    return next
}

exports.handle500Errors= (err, req, res, next) => {
       
    res.status(500).send({message: "Internal server error!"})
    return next
    };
