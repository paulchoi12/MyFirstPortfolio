exports.handle404Errors= (err, req, res, next) => {
        res.status(404).send({message: "Not found !!"})

    }
exports.handle500Errors= (err, req, res, next) => {
        res.status(500).send({message: "Internal server error!"})
    };
