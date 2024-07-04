import express from "express";
import xss from "xss";
import session  from "express-session";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import cors from "cors";
import bodyParser from "body-parser";


//Importation des routes
import { router } from "./routes/user.js";
import { routeContact } from "./routes/contact.js";
 



//Importation de la connexion mySql
//import {mysqlConnection} from "./db/dbConfig.js";
//import {mysqlConnection} from "./models/config/db.js";



//variable d'environnement
const PORT = process.env.PORT || 3002
const HOST = process.env.HOST;


// Initialisation d'express
export const app = express();


// Désinfection des entrées 
function sanitizeInput(req, res, next) {
  // Nettoyage des données dans req.body, req.params et req.query
  for (let key in req.body) {
      req.body[key] = xss(req.body[key]);      
  }
  for (let key in req.params) {
      req.params[key] = xss(req.params[key]);
  }
  for (let key in req.query) {
      req.query[key] = xss(req.query[key]);
  }
  
  // Nettoyage des en-têtes de requête
  for (let key in req.headers) {
      req.headers[key] = xss(req.headers[key]);
  }
  
  next();
}




//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.urlencoded({ extended: false }));

// Permet d'utilser la méthode json
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3005"],
  methods:["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    name:"sessionId",
    secret: process.env.SESSION_SECRET,  // a secret string used to sign the session ID cookie
    resave: false,  // true don't save session if unmodified
    saveUninitialized: false,  //true don't create session until something stored    
    cookie: { 
      secure: false ,
      httpOnly: false,
      //expires : 60 * 60 * 24
    }
}));

/*
app.use(session({
    name:"sid",
    secret: process.env.SESSION_SECRET,  // a secret string used to sign the session ID cookie
    resave: false,  // true don't save session if unmodified
    saveUninitialized: false,  //true don't create session until something stored    
    cookie: { 
      //secure: false ,
      //httpOnly: false,
      expires : 60 * 60 *24
    }
}))
*/

app.use(sanitizeInput);

// Utilisation des routes
//app.use("/api",router,routeContact);
app.use("/api",router);
app.use("/api",routeContact);



/*app.get('/api/signin', (req, res) => { 
  if (req.session.crsftoken) {
    res.json({loggedin:true, csrf:req.session.crsftoken})
  }else{
    res.json({loggedin:false})
  }  
});*/

app.listen(PORT,HOST, () => console.log(`The server is launched on the port ${PORT}`));










/*
//Importation de la dépendance cors elle permet d'ajouter des en-têtes HTTP afin 
//de permettre à un agent utilisateur d'accéder à des ressources d'un serveur situé 
//sur une autre origine que le site courant
import cors from "cors";

// Permet d'analyser les requêtes entrante dans un middleware
import bodyParser from "body-parser";


//variable d'environnement
const PORT = process.env.PORT || 3002
const HOST = process.env.HOST;


// Initialisation d'express
export const app = express();



app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

// Permet d'utilser la méthode json
//app.use(express.json());

// permet d'ajouter des en-têtes HTTP afin de permettre à un agent utilisateur d'accéder à des ressources d'un serveur
app.use(cors());



app.use(session({
    secret: process.env.CRSF_SECRET_TOKEN,  // a secret string used to sign the session ID cookie
    resave: false,  // don't save session if unmodified
    saveUninitialized: false  // don't create session until something stored
  }))

// Utilisation des routes
app.use("/api",router,routeContact);

//app.get("/",(req,res) => res.send("hello"))
app.get("/",(req,res) => {
  console.log(req);
})

app.listen(PORT,HOST, () => console.log(`The server is launched on the port ${PORT}`));
*/