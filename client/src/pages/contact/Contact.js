import React from "react"
import {NavBar} from "common/navBar/NavBar.js";
import {Footer} from "common/footer/Footer.js";
import "pages/contact/style.css";
import axios from "axios";

export const Contact = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();        
        //console.log(e);
        function typeFormation(type) {
            for (let i = 0; i < type.length; i++) {                
                if (type[i].checked === true) {
                    switch (type[i].name) {
                        case 'formContactTirOpérationnel':
                          return "tir Opérationnel";                          
                        case 'formContactTechniqueOperationnelle':                        
                          return "technique operationnelle";
                        case 'formContactCombatCorpsAcorps':                        
                          return "combat corps a corps";                          
                        default:
                          return "erreur type formation"
                    };                    
                };
            }; 
        };         
        
        axios.post('http://localhost:3001/api/saveContact',{
            name:e.target[1].value,
            firstName:e.target[2].value,
            email:e.target[0].value,
            type_formation:typeFormation(e.target),
            message:e.target[6].value            
        },{ withCredentials: true })
          .then((result) => {           
           if (result) {
                console.log(result); 
            }           
        })
          .catch((err) => console.log(err))
          document.querySelector("#contactForm").reset();
    };

    return (
        <div className="pageContact container-fluid p-0">
            <header>
                <NavBar/>
            </header>
            <main className="marginTopMain">
                <div className=" widthContainer mx-auto">
                    <h1 className="text-center mb-2  mb-sm-3 mb-md-5">CONTACT</h1>
                    <p className="text-center">Nous vous remercions de votre intérêt pour la formation d'AWK.T. </p>
                    <p className="text-center">
                        POUR TOUTES LES DEMANDES DE FORMATION DES MILITAIRES ET DES FORCES DE L'ORDRE, VEUILLEZ REMPLIR LE QUESTIONNAIRE DE FORMATION
                        CI-DESSOUS. UNE FOIS SOUMIS, NOUS L'EXAMINERONS ET VOUS CONTACTERONS.
                    </p>                    
                    <form className="mt-2  mt-sm-3 mt-md-5 w-75  mx-auto" action="http://localhost:3001/api/saveContact" method="post" name="formContact" id="contactForm" onSubmit={handleSubmit}>
                        <div className="d-flex flex-column rounded borderContainerInformation p-2"> 
                            <span className="fw-bolder mb-3">Demande d’informations</span>
                            <span className="fontSize text-danger">* Obligatoire</span>
                        </div>
                        <div className="mt-3 rounded border border-1 border-secondary p-2 d-flex flex-column">
                            <label htmlFor="email" className="mb-3">Adresse email<span className="text-danger">*</span></label>
                            <input className="fontSize border-start-0 border-top-0 border-end-0 border border-secondary mb-2" type="email" name="formContactEmail" id="email" required  placeholder="Votre adresse e-mail"/>
                        </div>
                        <div className="mt-3 rounded border border-1 border-secondary p-2 d-flex flex-column">
                            <label htmlFor="name" className="mb-3">Nom<span className="text-danger">*</span></label>
                            <input className="fontSize border-start-0 border-top-0 border-end-0 border border-secondary mb-2" type="text" name="formContactName" id="name" required placeholder="Votre nom" />
                        </div>
                        <div className="mt-3 rounded border border-1 border-secondary p-2 d-flex flex-column">
                            <label htmlFor="prenom"  className="mb-3">Prénom<span className="text-danger">*</span></label>
                            <input className="fontSize border-start-0 border-top-0 border-end-0 border border-secondary mb-2" type="text" name="formContactPrenom" id="prenom" required  placeholder="Votre prénom"/>
                        </div>
                        <div className="mt-3 rounded border border-1 border-secondary p-2">
                            <div className="mb-3">
                                <span >Type de formation:<span className="text-danger">*</span></span> 
                            </div>                            
                            <div>
                                <input className="me-2" type="checkbox" id="techniqueOpérationnelle" name="formContactTechniqueOperationnelle"></input>
                                <label className="fontSize" htmlFor="techniqueOperationnelle">Technique opérationnelle</label>  
                            </div> 
                            <div>
                                <input className="me-2" type="checkbox" id="tirOpérationnel" name="formContactTirOpérationnel"></input>
                                <label className="fontSize" htmlFor="tirOpérationnel">Tir opérationnel</label>  
                            </div> 
                            <div>
                                <input className="me-2" type="checkbox" id="combatCorpsAcorps" name="formContactCombatCorpsAcorps"></input>
                                <label className="fontSize" htmlFor="combatCorpsAcorps">Combat corps à corps</label>  
                            </div>                            
                        </div>
                        <div className="mt-3 rounded border border-1 border-secondary p-2">
                            <label className="mb-2" htmlFor="firstname">Votre message:<span className="text-danger">*</span></label>
                            <p className="text-start mb-3 fontSize">Veuillez fournir tous les détails  nécessaires pour mieux vous aider dans vos objectifs de formation ou vos questions</p>
                                                       
                            <textarea className="w-100 fontSize border-start-0 border-top-0 border-end-0 border border-secondary" id="commentaire" name="formContactCommentaire" placeholder="Votre message" >
                                
                            </textarea>
                        </div>
                        <div className="mt-3 rounded border border-1 border-secondary">
                            <input type="submit" value="Envoyer" className="w-100 bgColorb29f82 colorBorderInput text-light"/>
                                 
                        </div> 


                    </form>
                </div>
                
            </main>
            <Footer />
        </div>
    )
}