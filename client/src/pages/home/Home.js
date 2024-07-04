import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/home/style.css";
import {NavBar} from "common/navBar/NavBar.js"
import { Link } from "react-router-dom";
import pictureTO from "assets/pictureTraining/TO.png";
import pictureTir from "assets/pictureTraining/TIR.png";
import pictureCombat from "assets/pictureTraining/COMBAT.png";



export const Home = () => { 
    return (
        <div className="containerPageHome container-fluid p-0">            
            <header className='imageAccueil'>
              <NavBar/> 
              <div className='containerPerformance text-light text-center'>                    
                <span className="">LA PERFORMANCE A VOTRE DEMANDE</span>
              </div>
            </header>                      
            <main className="px-3 py-5">
              <div className="">
                <h1 className="text-center mb-4">A PROPOS D'ARAWAK TACTICS</h1>
                <section className="mb-5 text-center">
                  <p className="">
                  AWARAK TACTICS EST UN ORGANISME DE FORMATION, QUI S'ENGAGE À TRANSMETTRE DES COMPÉTENCES ESSENTIELLES ET DES EXPÉRIENCES DU MONDE RÉEL AUX UTILISATEURS FINAUX DES UNITÉS D'OPÉRATIONS SPÉCIALES DE L'ARMÉE, DE L'ÉTAT ET DES COLLECTIVITÉS LOCALES.
                  </p>
                  <p className="">
                    NOUS SOMMES TRÈS ATTACHÉS À LA VIE, À LA SÉCURITÉ ET LA CAPACITÉ DE SURVIE DE NOS UTILISATEURS FINAUX ET NOUS SOMMES CONVAINCUS QUE LE SEUIL D'EXCELLENCE DE LA FORMATION NE PEUT ÊTRE ÉLEVÉ QUE PAR L'APPLICATION DES ENSEIGNEMENTS TIRÉS DU COMBAT.
                  </p>
                </section>
                <section className="text-center mb-5">
                  <h2 className="">Notre but:</h2>
                  <p>LA RECHERCHE INCESSANTE DE L'EXCELLENCE POUR GARANTIR LE PLUS HAUT NIVEAU DE PERFORMANCE SUR LE CHAMP DE BATAILLE ET EN DEHORS.</p>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-decoration-none text-light bgColorb29f82 p-1">En savoir plus</Link>
                    </li>
                  </ul>
                </section>                  

                <section className="d-flex flex-column  flex-sm-row justify-content-sm-evenly justify-content-md-around text-center">
                  <article className="d-flex flex-column">
                    <div className="mb-3">
                      <img className="pictureTechnique" src={pictureTO} alt="imge formation technique opérationnelle"/>
                    </div>                    
                    <span className="mb-2">Technique opérationnelle</span>
                    <ul className="list-unstyled ">
                      <li className="">
                        <Link to="/training/technical" className="text-decoration-none text-light bgColorb29f82 p-1">En savoir plus</Link>
                      </li>
                    </ul>
                  </article>
                  <article className="d-flex flex-column">
                    <div className="mb-3">
                      <img className="pictureTir" src={pictureTir} alt="imge formation tir"/>
                    </div>                    
                    <span className="mb-2">Tir profesionnel</span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/training/shot" className="text-decoration-none text-light bgColorb29f82 p-1">En savoir plus</Link>
                      </li>
                    </ul>
                  </article>
                  <article className="d-flex flex-column">
                    <div className="mb-3">
                      <img className="pictureCombat" src={pictureCombat} alt="imge formation combat"/>
                    </div>                    
                    <span className="mb-2">Combat corps a corps</span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/training/fight" className="text-decoration-none text-light bgColorb29f82 p-1">En savoir plus</Link>
                      </li>
                    </ul>
                  </article>
                </section>

                
              </div>                                                              
            </main>
            <Footer></Footer>                                   
        </div>
    )
};