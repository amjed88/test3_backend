const jwt =require('jsonwebtoken');


module.exports =function (req,res,next){
    const token =req.header('auth-token');
    if (!token) return res.status(401).send('access denied');
    try{
        const verify=jwt.verify(token,'oiuyhjklmnbvcxdfr');
        req.username=verify
        next();

    }catch (err){
        res.status(400).send('invalid token');
    }

}