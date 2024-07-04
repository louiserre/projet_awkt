import React from "react";
import axios from 'axios';

export const useSubmitForm = () => {    

    React.useEffect(() => {
        const firstname = document.querySelector("#firstname");
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const signUpForm = document.querySelector("#signUpForm");
       // const formSignUp = document.forms["formSignUp"]; // ici j'aurai pue utliser le selecteur css       

        
        signUpForm.addEventListener("submit",(e) => {            
                          
                e.preventDefault();
                axios.post('http://localhost:3001/api/signup', {
                    firstName: firstname.value,
                    name: name.value,
                    email: email.value,
                    password :password.value
                })
                  .then((result) => console.log(result))
                  .catch((err) => console.log(err))
                
                        
        });

       // return signUpForm.reset();
        
    },[]);

    
};


