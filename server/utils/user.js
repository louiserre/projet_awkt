import jwt from "jsonwebtoken";

export function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token,process.env.JWT_KEY_TOKEN_REFRESH, function(err, decoded) {
            if (err) {                
                reject(err);
            }           
            resolve(decoded);    
        });
    });    
};

export function generateRefreshToken(user) {
    //return jwt.sign({id_user:user},`${process.env.JWT_KEY_TOKEN}`,{expiresIn:process.env.JWT_DURING})
    return jwt.sign({id_user:user},process.env.JWT_KEY_TOKEN_REFRESH,{expiresIn:process.env.JWT_DURING_REFRESH})

}

export function generateAccessToken(user) {
    //return jwt.sign({id_user:user},`${process.env.JWT_KEY_TOKEN}`,{expiresIn:process.env.JWT_DURING})
    return jwt.sign({id_user:user},process.env.JWT_KEY_TOKEN,{expiresIn:process.env.JWT_DURING})
}

export function generateAccessTokenForgotPassword(user) {
    //return jwt.sign({id_user:user},`${process.env.JWT_KEY_TOKEN}`,{expiresIn:process.env.JWT_DURING})
    return jwt.sign({id_user:user},process.env.JWT_KEY_FORGOT_PASSWORD,{expiresIn:process.env.JWT_DURING_FORGOT_PASSWORD})
}

export function verifyTokenForgotPassword(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token,process.env.JWT_KEY_FORGOT_PASSWORD, function(err, decoded) {
            if (err) {                
                reject(err);
            }           
            resolve(decoded);    
        });
    });    
};