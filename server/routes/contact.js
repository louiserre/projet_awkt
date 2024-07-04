import express from "express";
const routeContact = express.Router();
import {savesContact,getContacts,getcontactNames,updateStatus,deletesContact} from "../controllers/contact.js";
import {authentification} from "../middleware/authentification.js"
import {crsfJeton} from "../middleware/crsf.js"


routeContact.post("/saveContact",savesContact);

routeContact.get("/readContact",authentification,crsfJeton,getContacts);



routeContact.get("/readContactName",authentification,crsfJeton,getcontactNames);


routeContact.put("/updateStatus",authentification,crsfJeton,updateStatus);


routeContact.delete("/deletesContact",authentification,crsfJeton,deletesContact);


export {routeContact}


