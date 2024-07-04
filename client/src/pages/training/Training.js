import React from "react";
import {Footer} from "common/footer/Footer.js";
import {NavBar} from "common/navBar/NavBar.js";
import { Link } from "react-router-dom";
import pictureTO from "assets/pictureTraining/TO.png";
import pictureTir from "assets/pictureTraining/TIR.png";
import pictureCombat from "assets/pictureTraining/COMBAT.png";
import "pages/training/style.css";

export const Training = () => {
    return (
        <div className="pageTraining container-fluid p-0">            
            <header>
                <NavBar/>
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <h1 className="text-center mb-5">FORmations d’arawak tactics</h1>
                    <p className="text-center mb-5">
                        AWARAK TACTICS EST UN ORGANISME DE FORMATION, QUI S'ENGAGE À TRANSMETTRE DES COMPÉTENCES ESSENTIELLES ET DES EXPÉRIENCES DU MONDE RÉEL AUX UTILISATEURS FINAUX DES UNITÉS D'OPÉRATIONS SPÉCIALES DE L'ARMÉE, DE L'ÉTAT ET DES COLLECTIVITÉS LOCALES.
                        NOUS SOMMES TRÈS ATTACHÉS À LA VIE, À LA SÉCURITÉ ET LA CAPACITÉ DE SURVIE DE NOS UTILISATEURS FINAUX ET NOUS SOMMES CONVAINCUS QUE LE SEUIL D'EXCELLENCE DE LA FORMATION NE PEUT ÊTRE ÉLEVÉ QUE PAR L'APPLICATION DES ENSEIGNEMENTS TIRÉS DU COMBAT.
                        LA RECHERCHE INCESSANTE DE L'EXCELLENCE POUR GARANTIR LE PLUS HAUT NIVEAU DE PERFORMANCE SUR LE CHAMP DE BATAILLE ET EN DEHORS.
                    </p>
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
            <Footer/>
        </div>
    )
}