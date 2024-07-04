import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/about/style.css";
import {NavBar} from "common/navBar/NavBar.js";
import fondateur from "assets/images/presentaion.jpg";


 export const About = () => {
    return (
        <div  className="pageAbout container-fluid p-0">
            <header>
                <NavBar/>
            </header>
            <main className={`marginTopMain`}>
                <div className="px-3">
                    <h1 className="text-center mb-3 mb-sm-5">FONDATEUR</h1>
                    <section className="d-flex flex-column flex-md-row">
                        <article className=" w-100 w-md-50 mb-3 mb-md-0">
                            <img className="w-100 h-100" src={fondateur} alt="imge du fondateur de l'entreprise"/>
                        </article>
                        <article className=" w-100 w-md-50 p-4">
                            <p>Fondateur</p>
                            <p>_ANTONY </p>
                            <p>ARMEE DE TERRE -</p>
                            <p>
                                originaire de la Guadeloupe, sous-officier de l'armée de terre. Mon parcours militaire m'a permis de développer des compétences spécifiques dans différents domaines.
                                J'ai une expertise particulière en sports de combat et en protection rapprochée, des compétences qui exigent précision, rapidité et maîtrise. Ces compétences sont essentielles pour assurer la sécurité et la protection dans des situations variées et souvent exigeantes.
                                Dans le passé, j'ai servi en tant que transmetteur au sein d'un régiment de cavalerie.
                                De plus, j'ai également été opérateur au sein d'une unité particulière. Ces missions spéciales exigent un haut niveau de préparation, de discrétion et de compétences opérationnelles avancées.
                            </p>
                        </article>

                    </section>
                    <section></section>
                </div>

            </main>
            <Footer/>
            
        </div>
    )
}