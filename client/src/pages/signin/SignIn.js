import React from "react";
import {NavBar} from "common/navBar/NavBar.js";
import {Footer} from "common/footer/Footer.js"
import "pages/signin/style.css";
import axios from "axios";
import { AuthContext} from 'store/authContext'

export const SignIn = () => { 

    //utilisation du context
    const authctx = React.useContext(AuthContext);    
    //axios.defaults.withCredentials = true;

    const handleSubmit = (e) =>{
        e.preventDefault();           
        axios.post('http://localhost:3001/api/signin',{email:e.target[0].value,password:e.target[1].value},{ withCredentials: true })
          .then((result) => {           
           if (result) { 
           // console.log(result);               
                authctx.login(result.data.id_user,result.data.name,result.data.firstName,result.data.email,result.data.role,result.data.acessToken,result.data.refreshToken,result.data.crsftoken);
                if (result.data.role === 'admin') { //result.data.role === 'admin'
                 window.location.href='http://localhost:3005/compte/admin';         

                }else{
                    window.location.href='http://localhost:3005/compte/user';
                }           }           
        })
          .catch((err) => console.log(err))
          document.querySelector("#signInForm").reset();
    };    

   return (
    <div  className="pageSignUp container-fluid p-0">
        <header>
             <NavBar/>
        </header>
        <main className="marginTopMain  d-flex flex-column">
            
            <h1 className="text-center">Se connecter</h1>
            <form action="http://localhost:3001/api/signin" method="post" onSubmit={handleSubmit} name="formSignIn" id="signInForm" className="containerForm py-4 d-flex flex-column justify-content-center" >

                <div className="mx-auto w-50"> 
                    
                    <div className="containerEmail d-flex flex-column mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="formSignInEmail" id="email" required className="colorBorderInput" data-testid="emailInput"/>
                    </div>
                    <div className="containerPassword d-flex flex-column mb-3">
                        <label htmlFor="password" className="d-flex justify-content-between"><span>Mot de passe </span> <span>Oublié ?</span></label>
                        <input type="password" name="formSignInPassword" id="password" required className="colorBorderInput" data-testid="passwordInput"/>
                    </div>

                    <div className="containerSubmit">
                        <input type="submit" value="Se connecter" className="w-100 bgColorb29f82 colorBorderInput text-light" data-testid="submitButton"/>
                        
                    </div>
                </div>                
            </form>
            <ul className="list-unstyled" >
                <li className="w-50 mx-auto">Créer un compte</li>
            </ul>

        </main>
        <Footer/>
    </div>
   ) 
};