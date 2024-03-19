const JWT_SECRET = "jUgALBhaGAt";
const jwt = require('jsonwebtoken');
const fetchUser = (req,res,next)=>{
    //Get user from JWT Token, Add Id, return Obj
    const token=req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error:"Please Authenticate using a valid Token "});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user;
        next()   
    } catch (error) {
        res.status(401).send({error:"Please Authenticate using a valid Token "});
    }
}
module.exports=fetchUser;