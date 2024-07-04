// Importation de la pilote mysl 
import mysql from 'mysql';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';




const __filename = fileURLToPath(import.meta.url); // Renvoi le chemin du fichier
const __dirname = path.dirname(__filename); // Renvoi les répertoire d'un chemin de fichier
const urlDirectorySchema = path.join(`${__dirname}`,'../','schema');
//console.log(urlDirectorySchema);

// Création de la connection à la base de donnée
 export const mysqlConnection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD      
});

  // Etablissement de la connexion avec les informations fournies dans l'objet connection
  //mysqlConnection.connect();



  
  // Crétion de la base de donnée arawaktactics
  mysqlConnection.query(`CREATE DATABASE IF NOT EXISTS arawaktactics`,function (error,result) {
    if (error) {
        console.log(`---> Error depuis le create Database : ${error}`);
    }else{
       //console.log(result);
    }
});  


// Utilisation de la bdd arawaktactics
mysqlConnection.query(`USE arawaktactics`,function (error,result) {
    if (error) {
        console.log(`---> Error depuis le USE Database : ${error}`);
    }else{
        //console.log(result);
    }
}); 


fs.readdir (urlDirectorySchema, 'utf8', (err,files)=> {
    if (err) {
        console.log(err);
    }else{
        //console.log(files);        
        const fileschema = files.map((file) => {
           // const schemaSQL =  path.join(`${__dirname}`,'../','schema',`${file}`);
            let schemaSQL =  path.join(`${urlDirectorySchema}`,`${file}`);
            let schema = fs.readFileSync(schemaSQL, 'utf8');            
            //console.log(schema);
           
            mysqlConnection.query(schema, (error, results) => {
                if (error) {
                    console.error('Error creating tables:', error);
                } else {
                   // console.log(results);
                }            
            });

        });
    };
});

