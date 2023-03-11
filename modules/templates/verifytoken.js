const jwt = require('jsonwebtoken')
const SECRET = '!OEYIUSDG*(&!(*!UDHSJQDKJSQ'

exports.verifyToken = ( req, res, next)=>{
    // get the JWT from the Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401);
    }
    try{
      const decoded = jwt.verify(token,SECRET);
      // req.user = decoded;
    }
    catch(error){
      if(error instanceof jwt.TokenExpiredError){
        return res.json({
          'metadata':{
            code:400,
            message:'Token Expired'
          },
          'response':null
        })
      }else{
        return res.json({
          'metadata':{
            code:400,
            message:'Gagal'
          },
          'response':null
        })
      }
    }
      next();
  }
  