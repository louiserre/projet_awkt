//import mysqlConnection from "../config/db.js";
import {mysqlConnection} from "../config/db.js";


// Requète pour enregistrer un nouveau utilisateur
export function createUser(name,firstName,email,password,role,created_at,updated_at){ 
    return new Promise((resolve, reject) => {        
        mysqlConnection.query(`
            INSERT INTO user (name,firstName,email,password,role,created_at,updated_at)
                VALUES (?,?,?,?,?,?,?)
            `,[name,firstName,email,password,role,created_at,updated_at],
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





export function getUser(email){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            SELECT * FROM user WHERE email = ?
            `,[email],
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


export function readDataUser(id_user){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            SELECT * FROM user WHERE id_user = ?
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


export function updateDataUser(name,firstName,updated_at,id_user){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            UPDATE user SET name = ?, firstName = ?, updated_at = ? WHERE id_user = ?
            `,[name,firstName,updated_at,id_user],
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

export function resetPassword(password,updated_at,id_user){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            UPDATE user SET password = ?, updated_at = ? WHERE id_user = ?
            `,[password,updated_at,id_user],
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


export function deleteDataUser(id_user){
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`
            DELETE FROM user WHERE id_user = ?
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


// Requete pour mettre à jour la table user sur la colonne id_token
export function updateForeignKeyUser(id_refreshToken,updated_at,id_user){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            UPDATE user SET id_refreshToken = ?, updated_at = ? WHERE id_user = ?
            `,[id_refreshToken,updated_at,id_user],
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

