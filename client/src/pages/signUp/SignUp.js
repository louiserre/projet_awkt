import React from "react";
import {NavBar} from "common/navBar/NavBar.js";
import {Footer} from "common/footer/Footer.js"
import "pages/signUp/style.css";
import {useSubmitForm} from "pages/signUp/hooks/submitForm"

export const SignUp = () => {

const formSubmit = useSubmitForm();
   return (
    <div className="pageSignUp container-fluid p-0">
        <header>
            <NavBar/>
        </header>
        <main className="marginTopMain  d-flex flex-column">
            
            <h1 className="text-center">Créer un compte</h1>
            <form action="http://localhost:3001/api/signup" method="post" name="formSignUp" id="signUpForm" className="containerForm py-4 d-flex flex-column justify-content-center">

                <div className="mx-auto w-50"> 
                    <div className="cointainerFirstname d-flex flex-column mb-3">
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" name="formSignUpfirstname" id="firstname" required className="colorBorderInput" />
                    </div>                
                    <div className="containerName d-flex flex-column mb-3">
                        <label htmlFor="name">Nom </label>
                        <input type="text" name="formSignUpName" id="name" required className="colorBorderInput" />
                    </div>
                    <div className="containerEmail d-flex flex-column mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="formSignUpEmail" id="email" required className="colorBorderInput" />
                    </div>
                    <div className="containerPassword d-flex flex-column mb-3">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="formSignUpPassword" id="password" required className="colorBorderInput" />
                    </div>

                    <div className="containerSubmit">
                        <input type="submit" value="Créer" className="w-100 bgColorb29f82 colorBorderInput"/>
                    </div>
                </div>

                
            </form>

        </main>
        <Footer/>
    </div>
   ) 
};