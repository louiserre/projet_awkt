import jwt from 'jsonwebtoken';
import 'dotenv/config';


export function authentification(req,res,next){    
    
    const token = req.headers?.authorization?.split(' ')[1] || req.query?.token//req.headers.authorization.split(' ')[1] || req.query.token //(req ? req.query.token : req.headers.authorization.split(' ')[1])
        
    const decoded = jwt.verify(token,`${process.env.JWT_KEY_TOKEN}`,(err,result) => {
        if (err) {
            //console.log("-------> contenu err authentication");
           //console.log(err.expiredAt);           
            return res.status(401).json({err:err});
               
        }        
       
        //Stockage du result id_user dans le request afin que les différentes routes puisse l'exploiter 
        req.id_user = result.id_user;
       
        next();
    })
}


