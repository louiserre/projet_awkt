import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/privacyPolicy/style.css";
import {NavBar} from "common/navBar/NavBar.js"


export const PrivacyPolicy = () => {
    return (
        <div id="pageShot" className="container-fluid p-0 pageShot">
            <header>
                <NavBar/>
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <h1 className="text-center mb-3 mb-sm-5">Politique de Confidentialité</h1>
                    <section>
                        <article className="mb-3 mb-sm-5">
                            <h4>Introduction</h4>
                            <p>
                                Bienvenue sur notre site web. Nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                            </p>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Données Collectées</h4>
                            <p>
                                Nous pouvons collecter les types de données suivants :                            
                            </p>
                            <ul>
                                <li><stong>Informations personnelles</stong>: Nom, adresse email, numéro de téléphone, etc.</li>
                                <li><stong>Données de navigation</stong>:pages visitées, temps de visite, etc.</li>
                            </ul>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Données Utilisation des Données</h4>
                            <p>
                                Les données collectées peuvent être utilisées pour :                            
                            </p>
                            <ul>
                                <li>Fournir et améliorer nos services.</li>
                                <li>Répondre à vos demandes et communications.</li>
                                <li>Personnaliser votre expérience sur notre site.</li>
                                
                            </ul>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Partage des Données</h4>
                            <p>
                                Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos données avec :                            
                            </p>
                            <ul>
                                <li>Des prestataires de services tiers qui nous aident à exploiter notre site et nos services.</li>
                                <li>Les autorités légales, si requis par la loi.</li>
                            </ul>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Sécurité des Données</h4>
                            <p>
                                Nous prenons des mesures de sécurité appropriées pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction.                            
                            </p>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Cookies</h4>
                            <p>
                                Notre site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez désactiver les cookies via les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.                            
                            </p>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Vos Droits</h4>
                            <p>
                            Vous avez le droit de :                            
                            </p>
                            <ul>
                                <li>Accéder à vos données personnelles.</li>
                                <li>Demander la correction de vos données.</li>
                                <li>Demander la suppression de vos données.</li>
                                
                            </ul>
                        </article>
                        <article className="mb-3 mb-sm-5">
                            <h4>Contact</h4>
                            <p>
                                Si vous avez des questions concernant notre politique de confidentialité, vous pouvez nous contacter à : arawak.tactics@gmail.com .                            
                            </p>
                        </article>
                        <article>
                            <h4>Modifications de la Politique de Confidentialité</h4>
                            <p>
                                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.                            
                            </p>
                        </article>
                    </section>

                </div>

            </main>
            <Footer/>
        </div>
    )
}