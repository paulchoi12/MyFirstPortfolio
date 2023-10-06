exports.handleCustomErrors= (err,req,res,next)=>{
    if(err.status && err.msg){
        res.status(err.status).send({message: err.msg})
    }
    console.log(err.status);
    return next(err)
    };

exports.handle500Errors= (err, req, res, next) => {
    console.log(err);    
    res.status(500).send({message: "Internal server error!"})
    return next
    };
