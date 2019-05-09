


exports.validate = (route, req, res, next) => {
    if (route.auth && !req.decoded) {
        
        return res.status(400).send('Unauthorized.');
    }
    else {
        
        return next();
    }
}