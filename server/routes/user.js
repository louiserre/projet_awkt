import express from "express";
const router = express.Router();
import {signUp,signIn,readOneUser,updateOneUser,deleteOneUser,refreshToken,logout,forgotPassword,resetPasswordUser} from "../controllers/user.js";
//import {signUp} from "../controllers/user.js";


import {authentification} from "../middleware/authentification.js"
import {validatorPassword} from "../middleware/password.js";

import {crsfJeton} from "../middleware/crsf.js"

//Route signup 
router.post("/signup",validatorPassword,signUp);
//router.post("/signup",signUp);




// Route signIn
router.post("/signin",signIn);



//Route readOne
router.get("/authentication/readOne",authentification,crsfJeton,readOneUser);
//router.get("/readOne",readOneUser);

//Route update
router.put("/authentication/update",authentification,crsfJeton,updateOneUser);
//router.put("/update",updateOneUser);

//Route delete
router.delete("/authentication/delete",authentification,crsfJeton,deleteOneUser);

// Route refreshToken
router.post("/refreshToken",refreshToken);

// Route pour supprimer refreshToken dans la table authToken
//router.post("/logout",logout);
router.delete("/logout",logout);

// Route pour réinitialiser le mot de passe
router.get("/forgotPassword",forgotPassword);
router.post("/reset-password",resetPasswordUser);



//Exportation du module
export {router}








