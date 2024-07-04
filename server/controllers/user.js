import bcrypt from "bcrypt";
//import {createUser,getUser,readDataUser,updateDataUser,deleteDataUser,saveRefreshToken,readAuthToken,deleteRefreshToken,readToken,resetPassword} from "../models/query/user.js"
import {verifyToken,generateRefreshToken,generateAccessToken,generateAccessTokenForgotPassword,verifyTokenForgotPassword} from "../utils/user.js"



import {createUser,getUser,readDataUser,updateDataUser,deleteDataUser,resetPassword} from "../models/query/user.js"
import {saveRefreshToken,readAuthToken,deleteRefreshToken,readToken} from "../models/query/refreshToken.js"


import 'dotenv/config';
import {serverEmail} from "../utils/serverEmail.js";

import {createTokenCrsf} from "../utils/securite/crsf/crsf.js";



//signUp permet d'enregistrer un nouvel utilisateur dans la bdd
export function signUp(req,res){     
    const roleUser = req.body.hasOwnProperty("role") ? req.body.role: "user";    
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {        
        createUser(req.body.name,req.body.firstName,req.body.email,hash,roleUser,new Date(),new Date())
        .then(() => {
            // Si l'utilisateur à bien été enregistré dans la bdd retourner une response
            res.status(201).json({message:"utilisateur crée et sauvegarder"}).status(200);
            // Envoi d'un mail de confirmation d'inscription
            const mail = serverEmail(req.body.email,'Confirmation de votre inscription sur le site Arawak Tactics',`<p style="color:black;text-align:start;">Félicitations ! 
                Votre inscription sur le site Arawak Tactics est un succès. Bienvenue dans notre communauté ! Votre identifiant pour 
                vous connectez à votre espace personnel est ${req.body.email}. Vous pouvez désormais explorer toutes les 
                fonctionnalités de notre application. Si vous avez des questions ou avez besoin d'aide, n'hésitez pas à nous contacter.
                Merci pour votre confiance et profitez de votre expérience avec nous !</p>`
            );
        })
        .catch((err) => res.status(500).json({error:err}));        
    })
    .catch((err) => res.status(500).json({error:err}));   
};


//SignIn permet de connecter un utilisateur à son compte
export function signIn(req,res){    
    //Vérifier que l'utilisateur existe bien dans la bdd
    
    getUser(req.body.email)
    .then((user) => {        
        if (user.length === 0) {
            res.status(500).json({error:`Veuillez entrer une adresse email valide`})
            
        }else{
            bcrypt.compare(req.body.password,user[0].password)
            .then((controlPassword) => {            
                //Si le mot de passe est correct retourne le acessToken et le  refreshToken
                if (controlPassword) {
                    
                    // Gérération du crsf Token
                    const crsftoken = createTokenCrsf(process.env.CRSF_SECRET_TOKEN);// c'est ce jeton qui esr retourner au navigateur et c'est aussi celui ci que le navigateur doit me retourner
                    
                    // Stockage du crsftoken de l'utilisation dans la session au niveau du backend
                    
                    //req.session.test = "vivi";
                    req.session.crsftoken = crsftoken;   
                    
                    

                    const acessToken = generateAccessToken(user[0].id_user);
                    const refreshToken = generateRefreshToken(user[0].id_user);
                    //console.log(refreshToken);
                    verifyToken(refreshToken)
                    .then(decoded => {
                        //console.log("--------------> contenu decoded ");
                        //console.log(decoded);
                        saveRefreshToken(decoded.id_user,refreshToken,decoded.iat,decoded.exp,new Date(),new Date())
                    })
                    .catch(err => console.log(err)) 
                    //req.session.crsftoken = crsftoken;               
                    res.status(201).json({id_user:user[0].id_user,name:user[0].name,firstName:user[0].firstName,email:user[0].email,role:user[0].role,role:user[0].role,acessToken,refreshToken,crsftoken});
                }else{
                    res.status(500).json({err:"Le mot de passe est incorrect"});
                }            
            }); 
        }                    
    });      
};


// Permet d'afficher les donnée de l'utilisateur après authentification
export function readOneUser(req,res){ 
    
    readDataUser(req.query.id_user)
    .then((data) => {        
        if (data) {
            res.status(201).json({message:data});
        }        
    })
    .catch((err) => console.log(err));
};

// Permet de mettre a jour le nom et le prenom de l'utilisateur
export function updateOneUser(req,res){    
    updateDataUser(req.body.name,req.body.firstName,new Date(),req.body.id_user)
    .then((result) => { 
        //console.log(result);       
        res.status(200).json({message:"Les données ont bien été mises à jour"});                           
    })
     .catch((err) => {
        res.status(400).json({err});        
    });
};

// Permet de supprimer les données de l'utilisateur
export function deleteOneUser(req,res){    
    deleteDataUser(req.query.id_user)
    .then(() => {        
        res.status(201).json({message:"Les données ont bien été supprimés"});            
    })
    .catch((err) => {
        res.status(400).json({err:err});
        //console.log(err);
    });
};


// Permet de regénérer un nouveau accessToken a l'utilisateur
export async function refreshToken(req,res) {    
    
    const token = req.headers?.authorization?.split(' ')[1]
    
    
    try {
        const refreshToken = await verifyToken(token) 
        const tokenDecoded = await refreshToken;
            
        if(tokenDecoded.id_user){
            readAuthToken(tokenDecoded.id_user)
            .then((data) => {
                if(data[0].id_user === refreshToken.id_user & data[0].refreshToken === token){                    
                    const acessToken = generateAccessToken(refreshToken.id_user)
                    res.json({acessToken})
                }
            })
        }
    } catch (error) {
        if (error.message === "jwt expired") {            
            deleteRefreshToken(tokenDecoded.id_user)                      
        }        
        res.json({error})
    }       
};




// Ce controller permet de supprimer le refreshToken a la déconnexion de l'utilisateur
export function logout(req,res) { 
    
      
    deleteRefreshToken(req.query.id_user)
    .then(() => {
        
        
        res.status(201).json({data:"RefreshToken supprimé avec succès"})
    })
    .catch(err => res.json({err}))    
}

// Demande de réinitialisation du mot de passe
export function forgotPassword(req,res) {
   
    // Vérifier dans la base de donnée que l'utilisateur existe
    findEmail(req.body.email)
    .then((user) => { 
        
        if (user.length !== 0) {
            // Si l'utilisateur existe supprimer son refreshToken dans la table authToken
            readToken(user[0].id_user)
            .then((data) => {   
                
                if(data.length === 0){//data.length === 0
                    res.status(500).json({err:"L'utilisateur n'a pas de refresh token enregistrer dans la table authToken"})                    
                }else{
                    deleteRefreshToken(data[0].id_user)
                    .then(() =>{                        
                        res.status(200).json({data:`Le token de l'utilisateur a bien été supprimé de la BDD`});                        
                    })
                    .catch(() => {
                        res.status(500).json({data:"Une erreur est survenue lors de la supression du refreshToken de l'utilisateur dans la bdd"});                        
                    }); 
                }                    
            });            
            // Si l'utilisateur existe générer un jeton d'authentification pour modifier son mot de passe
            const token= generateAccessTokenForgotPassword(user[0].id_user);
            // Envoi du lien par email pour modifier le mot de passe de l'utilisateur
            //const mail = serverEmail(req.body.email,'modifier votre mot de passe',`http://localhost:3005/reset-password/${user[0].id_user}/${token}`)
            const mail = serverEmail(req.body.email,'modifier votre mot de passe',`http://localhost:3005/reset-password`)
            res.status(200).json({tokenResetPassword:token}); // Envoyer le token sur l'api et le récupérer avec un contexte et le stocké dans local storage       
        }else{
            res.status(500).json({error:`Cette addresse email n'exite pas veuillez entrer une adresse email valide`})
        }
    });    
}

//Réinitialisation du mot de passe de l'utilisateur 
export function resetPasswordUser(req,res) {    
    const token = req.headers?.authorization?.split(' ')[1];
    verifyTokenForgotPassword(token)
    .then((data) => {      
        bcrypt.hash(req.body.password, 10)
        .then((hash) => {                          
            //Modification du mot de passe dans la bdd
            resetPassword(hash,new Date(),data.id_user)
                .then(() => {
                    res.status(201).json({message:"Votre mot de passe à été modifié avec succès"});                   
                })
                .catch((err) => res.status(500).json({error:err}));        
        });
    })
    .catch(err => console.log(err))
};

