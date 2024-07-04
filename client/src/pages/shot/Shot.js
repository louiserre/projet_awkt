import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/shot/style.css";
import {NavBar} from "common/navBar/NavBar.js"
import { Link } from "react-router-dom";

export const Shot = () => {
    return (
        <div id="pageShot" className=" pageShot container-fluid p-0">
            <header>
                <NavBar/>
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <h1 className="text-center mb-5">TIR PROFESSIONNEL</h1>
                    <section className="mb-5">
                        <p>
                            NOUS COMPRENONS QUE LES UTILISATEURS FINAUX D'AUJOURD'HUI EXISTE DE MULTIPLES OPTIONS  À LA RECHERCHE DE LA CAPACITÉ OPÉRATIONNELLE INDIVIDUELLE.
                        </p>
                        <p>
                            LA FORMATION AUX ARMES À FEU ET AUX ARMES EST BASÉE SUR DES DÉCENNIES DE SERVICE DANS LE MONDE RÉEL AU COMBAT DANS PLUSIEURS THÉÂTRES
                            ET ENVIRONNEMENTS OPÉRATIONNELS.
                        </p>
                        <p>
                            NOTRE OBJECTIF EST DE FOURNIR CE QUE NOUS CROYONS ÊTRE LES APPRENTISSAGES LES PLUS EFFICACES ET LES PLUS EFFICACES DE NOTRE EXPÉRIENCE DU MONDE RÉEL ET 
                            D'OFFRIR UN INSTRUCTION DANS UN CONTEXTE PRATIQUE, FACILE À APPRENDRE ET BASÉ SUR LA RÉALITÉ. 
                        </p>
                        <p>
                            LES COURS DE TIR EN GROUPE GBRS SONT SPÉCIFIQUEMENT CONÇUS AUTOUR DES BESOINS SPÉCIFIQUES DE L'UNITÉ, DE L'AGENCE OU DU CLIENT ET DES SÉLECTIONS 
                            D'ARMES SPÉCIFIQUES.
                        </p>
                    </section>
                    <section className="mb-5">
                        <h5>MODÈLES DE BLOCS DE FORMATION ACTUELS :</h5>
                        <ul className="list-unstyled">
                            <li>COURS DE TIR DE BASE (PISTOLET/FUSIL)</li>
                            <li>COURS DE TIR DYNAMIQUE (PISTOLET/FUSIL)</li>
                            <li>COURS DE TIR AVANCÉ (PISTOLET/FUSIL)</li>
                        </ul>
                    </section>
                    <section className="mb-5">
                        <h5>SUJETS COUVERTS (TEL QUE REQUIS PAR LE DÉVELOPPEMENT DU COURS) :</h5>
                        <ul>
                            <li>SÉLECTION DES ARMES</li>
                            <li>MANIPULATION SÉCURISÉE DES ARMES</li>
                            <li>MISE À ZÉRO DES SYSTÈMES D'ARMES</li>
                            <li>POINT DE VISE/POINT D'IMPACT</li>
                            <li>ALIGNEMENT DE LA VUE</li>
                            <li>MISE AU POINT DU VUE AVANT</li>
                            <li>OPTIQUES FUSIL/PISTOLET</li>
                            <li>COMMANDE DE DÉCLENCHEMENT/PRÉPARATION DE DÉCLENCHEMENT</li>
                            <li>RÉINITIALISATION DE LA GÂCHETTE POST-TIR</li>
                            <li>TRANSITIONS CIBLES MULTIPLES</li>
                            <li>DESSIN DEPUIS L'ÉTUI</li>
                            <li>MODIFICATIONS DE BASE DES ARMES</li>
                            <li>CIBLER LES TRANSITIONS EN MOUVEMENT</li>
                            <li>TIRER DEPUIS L'ÉTUI SOUS LA FORCE</li>
                            <li>PRODUIRE DES ARMES À PARTIR DE LA dissimulation</li>
                            <li>HABILLAGE POUR LE PORT D'ARME CHOISIE</li>
                            <li>CONSIDÉRATIONS SUPPLÉMENTAIRES SUR L'ÉQUIPEMENT</li>
                            <li>CHOIX D'ÉQUIPEMENT MÉDICAL</li>
                            <li>FAIBLE LUMIÈRE/PRISE DE NUIT</li>
                            <li>CONDITIONS ENVIRONNEMENTALES MULTIPLES</li>
                            <li>PROGRESSION DE LA FORMATION</li>
                            <li>OUTILS D’AUTO-ÉVALUATION/MINDSET</li>
                            <li>LUMIÈRES D'ARMES</li>
                        </ul>
                    </section>
                    <section>
                        <p>Pour plus d’information veuillez remplir le formulaire de contact.</p>
                        <div className="w-25 bgColorb29f82 mx-auto text-center">
                            <Link to="/contact" className="text-nowrap text-decoration-none text-light">demande d’information</Link>
                        </div>
                        
                    </section>

                </div>

            </main>
            <Footer/>
        </div>
    )
}