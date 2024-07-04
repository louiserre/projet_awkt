import {mysqlConnection} from "../config/db.js";

export function saveRefreshToken(id_user,refreshToken,iat,exp,created_at,updated_at){ 
    return new Promise((resolve, reject) => {        
        mysqlConnection.query(`
            INSERT INTO refreshToken (id_user,refreshToken,iat,exp,created_at,updated_at)
                VALUES (?,?,?,?,?,?)
            `,[id_user,refreshToken,iat,exp,created_at,updated_at],
            function (error,result) {
                if (error) {
                    reject(error);
                }else{
                    resolve(result);              
                }
            }
        );
    });       
};




export function readAuthToken(id_user){ 
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
        SELECT * FROM refreshToken  INNER JOIN user ON refreshToken.id_user = user.id_user WHERE  refreshToken.id_user = ?     
            `,[id_user],
            function (error,result) {
                if (error) {
                    reject(error);
                }else{
                    resolve(result);                    
                }
            }
        );
    });      
}

export function readToken(id_user){ 
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
        SELECT * FROM refreshToken WHERE id_user = ?      
            `,[id_user],
            function (error,result) {
                if (error) {
                    reject(error);
                }else{
                    resolve(result);                    
                }
            }
        );
    });      
}


export function deleteRefreshToken(id_user){
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`
            DELETE FROM refreshToken WHERE id_user = ?
            `,[id_user],
            function (error,result) {
                if (error) {
                    reject(error); 
                }else{                    
                    resolve(result);
                }
            }
        );
    });
};