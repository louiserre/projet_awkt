import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/fight/style.css";
import {NavBar} from "common/navBar/NavBar.js"
import { Link } from "react-router-dom";

export const Fight = () => {
    return (
        <div className="pageFight container-fluid p-0">
            <header>
                <NavBar/>
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <h1 className="text-center mb-5">COMBAT CORPS A CORPS</h1>
                    <section className="mb-5">
                        <p>
                            Ouvertes à tous publics, ces formations perfectionnent les compétences des stagiaires en matière de défense ou d’intervention au corps à corps. Garant de l’acquisition de savoir-faire solides, une complétion progressive de l’arborescence de nos modules est souhaitable.                        </p>
                        <p>
                            La composante défense à mains nues de notre doctrine est uniquement défensive. Les modules « Essentiel debout » dit « A » et « Essentiel sol » dit « B » doivent être suivis en premier. Les stagiaires ont le choix de suivre ces 2 modules dans l’ordre qu’ils souhaitent, afin de s’adapter mieux à ses contraintes d’emploi du temps. Ils permettent d’accéder au module « Essentiel menace armée » dit « C ».
                        </p>
                        <p>
                            Une fois l'intégralité de ces modules effectués, les stagiaires peuvent se présenter au « Niveau 1 Défense à mains nues » dit « D » qui va certifier, par le passage d’épreuves exigeantes, l’acquisition des savoir-faire. En cas de succès, ils reçoivent un diplôme avec mention. En cas d’échec, ils pourront se représenter autant de fois qu’ils le souhaitent.  
                        </p>
                        <p>
                            Le matériel nécessaire, notamment de protection (casques, gants, mitaines, protège-tibias), est mis à disposition sur place, à l’exception des protège-dents et coquilles. Pour ces 2 derniers, les stagiaires peuvent faire le choix de venir les leurs ou les acheter sur place (voir matériel obligatoire dans la description des formations). 
                        </p>
                        <p>
                            Réservés aux professionnels armés dans le cadre de leur travail, des modules spécialisés « Conditionnement », « Armes intermédiaires » et « Couteau ». 
                        </p>
                        <p>
                            AWK.T n’est pas un club de sport de combat. Nous permettons, au cours de nos modules, aux stagiaires d’intégrer un ensemble de savoir-faire essentiels dans le domaine du corps à corps.Ils ont ensuite toutes les clés pour les entretenir dans leur cadre sportif ou professionnel. Le corps à corps désigne l’ensemble des techniques et tactiques dédiées à la défense ou l’intervention à très courte distance. Les distances avec les menaces potentielles dans ce contexte sont extrêmement faibles, les temps de réaction très faibles et le danger d’autant plus accru. Les techniques et tactiques dans ce domaine, faisant appel à l’usage d’armes à feu, sont enseignées dans les formations « Techniques opérationnelles milieu clos » réservées aux professionnels armés. 
                        </p>
                        <p>
                            Le plus haut niveau de maîtrise du corps à corps permettra aux stagiaires de renforcer leur capacité à protéger leurs vie et intégrité physique, ainsi que celles de leurs concitoyens. Face à une situation extrême de danger imminent, le stress engendré par la confrontation pourra ainsi être abaissé au minimum tandis que leurs capacités d’analyse de la situation et de prise décision pourront s’exprimer à leur maximum. Il est important d’ajouter que plus la maîtrise du corps à corps est grand, plus il est possible de graduer sa réponse proportionnellement à une menace notamment dans le contexte de la légitime défense. 
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