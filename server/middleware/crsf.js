import 'dotenv/config';
import {verifyTokenCrsf} from "../utils/securite/crsf/crsf.js"

export function crsfJeton(req,res,next) {   

    const crsfToken = req.headers?.crsftoken || false;
    
    if(crsfToken){
        if(crsfToken === req.session.crsftoken){
            const verify = verifyTokenCrsf(process.env.CRSF_SECRET_TOKEN,crsfToken);            
            if (verify) {                
                next();                
            }
        }else{
            res.json({data:'token crsf invalide'})
        }
    }else{       
        res.json({error:'Veuillez soumettre votre crsf Token'});
    }    
}