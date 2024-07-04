import React from "react";

//Création du context pour l'authentification
const defaultValue = {
    id_user:"",
    name:"",
    firstName:"",
    email:"",
    role:"",    
    acessToken:"",
    refreshToken:"",
    crsftoken:"",
    userIsloggedin:false,
    login: () => {},
    logout:() => {}
}

// Création du context
export const AuthContext = React.createContext(defaultValue);

//Controle de la présence du token dans le local storage
const idUserLocalStorage = localStorage.getItem("id_user")
const nameLocalStorage = localStorage.getItem("name")
const firstNameLocalStorage = localStorage.getItem("firstName")
const emailLocalStorage = localStorage.getItem("email")
const roleUserLocalStorage = localStorage.getItem("role")
const acessTokenLocalStorage = localStorage.getItem("acessToken")
const refreshTokenLocalStorage = localStorage.getItem("refreshToken")
const crsftokenLocalStorage = localStorage.getItem("crsftoken")



//Le context provider pour wrapper app.js, et permet d'accéder aux données du context depuis un composant
export const AuthContextProvider = (props) => {   
  
      //stockage des tokens d'authentification
      const [idUser,setIdUser] = React.useState(idUserLocalStorage);
      const [name,setName] = React.useState(nameLocalStorage);
      const [firstName, setFirstName] = React.useState(firstNameLocalStorage);
      const [email, setEmail] = React.useState(emailLocalStorage);
      const [roleUser, setRoleUser] = React.useState(roleUserLocalStorage);
      const [acessToken, setAcessToken] = React.useState(acessTokenLocalStorage);
      const [refreshToken, setRefreshToken] = React.useState(refreshTokenLocalStorage);
      const [crsftoken, setCrsftoken] = React.useState(crsftokenLocalStorage);      
      
  
      //Fonction pour mettre a jour le token dans le state
      const loginHandler = (id_user,name,firstName,email,role,acessToken,refreshToken,crsftoken) => {//c'est lorsque il est logguer
        setIdUser(id_user)
        setName(name);
        setFirstName(firstName)
        setEmail(email)
        setRoleUser(role)
        setAcessToken(acessToken);
        setRefreshToken(refreshToken);
        setCrsftoken(crsftoken);
        

          //mettre la donnée dans le local sorage (pour ne pas perdre l'authentification)
          localStorage.setItem("id_user", id_user)
          localStorage.setItem("name", name)//stocke une paire clé/valeur
          localStorage.setItem("firstName", firstName)
          localStorage.setItem("email", email)
          localStorage.setItem("role", role)
          localStorage.setItem("acessToken", acessToken)//stocke une paire clé/valeur
          localStorage.setItem("refreshToken", refreshToken)
          localStorage.setItem("crsftoken", crsftoken)
          
          
      }
  
      //Pour se déconnecter faire passer le token a null
      const logoutHandler = () => {  
        setIdUser(null);      
        setName(null);
        setFirstName(null);
        setEmail(null);
        setRoleUser(null)
        setAcessToken(null);
        setRefreshToken(null);
        setCrsftoken(null);

        localStorage.removeItem("id_user");
        localStorage.removeItem("name");
        localStorage.removeItem("firstName");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("acessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("crsftoken");
        
        //localStorage.clear() // cette methode permet de vider tous le localStorage
      }
  
      //si il y a présence du token sa veut dire que je suis logguer
      //convertir le token en valeur booléenne
      const userIsloggedin = !!acessToken;
      //console.log("---> Contenu de userIsloggedin");
      //console.log(userIsloggedin);
  
      //Le context value (le context value c'est la valeur du context)
      //context mis a jour
      const contextValue = {
        id_user:idUser,        
        name:name,
        firstName:firstName,
        email:email, 
        role:roleUser,
        acessToken:acessToken,
        refreshToken:refreshToken,
        crsftoken:crsftoken,
        isLoggedIn:userIsloggedin,
        login:loginHandler,
        logout:logoutHandler
      }
  
      return (
        <AuthContext.Provider value={contextValue}>
          {props.children}
        </AuthContext.Provider>  
      )
  }