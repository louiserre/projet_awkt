import {saveContact,getContact,getcontactName,updateStatusContact,deleteContact} from "../models/query/contact.js"


export function savesContact(req,res){ 
        //saveContact(req.body.name,req.body.firstName,req.body.email,req.body.type_formation,req.body.message,req.body.status,new Date(),new Date())       
        saveContact(req.body.name,req.body.firstName,req.body.email,req.body.type_formation,req.body.message,false,new Date(),new Date())
        .then(() => {                
                res.status(201).json({message:"Votre demande a bien été enregistrée"})
        })
        .catch((err) => {
                res.status(500).json({error:err})
        });     
};

export function getContacts(req,res){        
        getContact()
        .then((result) => {                
                res.status(201).json({data:result})
        })
        .catch((err) => {                
                res.status(500).json({error:err})
        });     
};

export function getcontactNames(req,res){        
        getcontactName(req.body.name,req.body.id_contact)
        .then((result) => { 
                console.log(result);               
                res.status(201).json({data:result})
        })
        .catch((err) => {                
                res.status(500).json({error:err})
        });     
};

export function updateStatus(req,res){           
        updateStatusContact(Boolean(req.body.status),req.body.id_contact)
        .then(() => {                
                res.status(201).json({data:"Le status a bien été mis à jour"})
        })
        .catch((err) => {                
                res.status(500).json({error:err})
        });     
};

export function deletesContact(req,res){              
        deleteContact(req.query.id_contact)
        .then((result) => {               
                res.status(201).json({data:"Le message a bien été supprimé"})
        })
        .catch((err) => {                
                res.status(500).json({error:err})
        });     
}