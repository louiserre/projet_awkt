import {mysqlConnection} from "../config/db.js";

export function saveContact(name,firstName,email,type_formation,message,status,created_at,updated_at) {
    return new Promise((resolve,reject) => {
        mysqlConnection.query(`
            INSERT INTO contact (name,firstName,email,type_formation,message,status,created_at,updated_at)
                VALUES (?,?,?,?,?,?,?,?)
            `,[name,firstName,email,type_formation,message,status,created_at,updated_at],
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

export function getContact(){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            SELECT * FROM contact 
            `,
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


export function getcontactName(name,id_contact){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            SELECT * FROM contact WHERE name = ? AND id_contact = ?
            `,[name,id_contact],
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

export function updateStatusContact(status,id_contact){
    return new Promise((resolve, reject) => { 
        mysqlConnection.query(`
            UPDATE contact SET status = ? WHERE id_contact = ?
            `,[status,id_contact],
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

export function deleteContact(id_contact){
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`
            DELETE FROM contact WHERE id_contact = ?
            `,[id_contact],
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