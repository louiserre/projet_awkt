import Tokens from "csrf";


// Instanciation du jeton crsf
export const tokens = new Tokens();

export function createTokenCrsf(keySecret) {        
    const secret = keySecret;
    // c'est ce jeton csrf qui est retourner au navigateur et c'est aussi celui que le navigateur doit retourner
    return tokens.create(secret)
}

// Fonction qui vérifie si le jeton csrf est valide
export function verifyTokenCrsf(secret,token){
    if (tokens.verify(secret, token)) {
        return true;
    }else{
        return false;
    }
}

