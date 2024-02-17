const errorHandlingMiddleware = (err, req, res, next) => {
   if(err){
    console.log(err);
    res.status(500).send('Something went wrong!');
   }else{
    next()
   }
};

module.exports = errorHandlingMiddleware;