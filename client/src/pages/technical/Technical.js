import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/technical/style.css";
import {NavBar} from "common/navBar/NavBar.js"
import { Link } from "react-router-dom";

export const Technical = () => {
    return (
        <div className="pageTechnical container-fluid p-0">
            <header>
                <NavBar/>
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <h1 className="text-center mb-5">TECHNIQUE OPERATIONNELLE</h1>
                    <section className="mb-5">
                        <p>
                            Réservées aux professionnels armés dans le cadre de leur travail, ces formations perfectionnent leurs compétences techniques et tactiques opérationnelles en milieu clos, connu sous l’acronyme anglais CQB (Close Quarters Battle). Garant de l’acquisition de savoir-faire solides, une complétion progressive de l’arborescence de nos modules est souhaitable.
                        </p>
                        <p>
                            Il est nécessaire de maîtriser les bases du tir au pistolet pour accéder au premier module « Essentiel CQB ». Pour cette raison, il est demandé aux stagiaires de suivre au préalable le module « Essentiel pistolet ». Ils peuvent ensuite se présenter au « Niveau 1 CQB » qui va certifier, par le passage d’épreuves exigeantes, l’acquisition des savoir-faire. En cas de succès, ils reçoivent un diplôme avec mention. En cas d’échec, ils pourront se représenter autant de fois qu’il le souhaite. 
                        </p>
                        <p>
                            Pour poursuivre la progression des stagiaires, nous proposons le module « Progression CQB » . Il sera nécessaire de maîtriser les bases du tir au fusil, par conséquent, de suivre au préalable le module « Essentiel fusil ». Il mènera au « Niveau 2 CQB » sanctionné par l’obtention d’un diplôme. Le niveau d’excellence acquis, à titre indicatif, sera comparable à celui des opérateurs des forces spéciales en termes de maîtrise des armes à feu. Il sera entretenu par des modules d’entraînement « Élite CQB». 
                        </p>
                        <p>
                            Des modules spécialisés « Bouclier CQB », « Effraction CQB », « NRBC CQB » et « K9 CQB » sont également proposés.
                        </p>
                        <p>
                            Le matériel nécessaire peut être mis à disposition sur place moyennant un supplément. Les stagiaires pourront aussi faire le choix de venir avec le matériel qu’ils utilisent dans leur cadre professionnel s'il couvre l’ensemble des besoins notamment un kit de conversion UTM permettant l’utilisation de munitions marquantes (voir matériel obligatoire dans la description des formations). 
                        </p>
                        <p>
                            Nous ne nous substituons en aucun cas à une école militaire ou de police, nous apportons aux professionnels étatiques notre expertise afin d'enrichir leur panel de compétences dans des domaines clés, ici le milieu clos.
                        </p>
                        <p>
                            Un milieu est dit clos lorsqu'il est totalement ou partiellement fermé (un bâtiment, un tunnel, un dédale rocheux,…). Les distances avec les menaces potentielles dans ce contexte sont extrêmement faibles, les temps de réaction très faibles et le danger d’autant plus accru. 
                        </p>
                        <p>
                            Le plus haut niveau de maîtrise des techniques opérationnelles en milieu clos permettra aux professionnels de renforcer leur capacité à protéger leurs vie et intégrité physique, celles de leurs collègues et concitoyens. Face à une situation extrême de danger imminent, le stress engendré par les distances réduites pourra ainsi être abaissé au minimum tandis que leurs capacités d’analyse de la situation et de prise décision pourront s’exprimer à leur maximum                        
                        </p>
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