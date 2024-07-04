import React from "react";
import {Footer} from "common/footer/Footer.js";
import "pages/compteAdmin/style.css";
import {NavBar} from "common/navBar/NavBar.js"
import axios from "axios";
import { AuthContext} from 'store/authContext'




export const CompteAdmin = () => {
    const authctx = React.useContext(AuthContext);    
    const [editingItemId, setEditingItemId] = React.useState(null); // Change from a boolean to an ID
    const [data, setData] = React.useState(null);

    console.log(authctx);

    const handleList = () => {        
        axios.get('http://localhost:3001/api/readContact',{            
            headers:{
                'Authorization': `Bearer ${authctx.acessToken}`,
                'crsftoken':`${authctx.crsftoken}`                
            },
            withCredentials: true
        })
        .then((result) => { 
            console.log(result);                     
            setData(result.data.data)
        })
        .catch((err) => console.log(err))         
    };

    const handleSubmitStatus = (e, id) => {
        e.preventDefault();        
        axios.put('http://localhost:3001/api/updateStatus',
            {status: e.target[0].value === "Traitée" ? true : false, id_contact: id},
            {
                headers: {'Authorization': `Bearer ${authctx.acessToken}`, 'crsftoken': `${authctx.crsftoken}`},
                withCredentials: true
            }
        )
        .then((result) => {           
           if (result) {
                handleList();
                setEditingItemId(null); // Reset editing item
           }           
        })
        .catch((err) => console.log(err))
    };

    const handleSubmitRemoveStatus = (id) => {        
        axios.delete('http://localhost:3001/api/deletesContact', {
            headers: {'Authorization': `Bearer ${authctx.acessToken}`, 'crsftoken': `${authctx.crsftoken}`},
            params: {id_contact: id},
            withCredentials: true            
        })
        .then((result) => {
            if (result) {
                handleList();
           }           
        })
        .catch((err) => console.log(err))
    };

    const logout = (e) => {
        if (e) {            
            axios.delete("http://localhost:3001/api/logout", {params: {id_user: authctx.id_user}})
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
            authctx.logout();
            window.location.href = 'http://localhost:3005/';
        }
    }

    return (
        <div className="pageCompteAdmin">
            <header>
                <NavBar />
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <div>
                        <h1 className="text-start text-sm-center pb-4">Mon compte</h1>
                        <div className="d-flex justify-content-center pb-5"><button className="border-0 text-light bgColorb29f82" onClick={logout}>deconnexion</button></div>
                    </div>
                    <div className="p-4">
                        <section>
                            <h3>Détails du compte</h3>
                            {authctx ? <ul className="list-unstyled">                                   
                                        <li><span className="fw-bold">Nom: </span> {authctx.name}</li>
                                        <li><span className="fw-bold">Prénom: </span>{authctx.firstName}</li>
                                        <li><span className="fw-bold">Email: </span> {authctx.email}</li>                               
                            </ul> : null}
                        </section>
                        <section>
                            <button className="border-0 mb-4" onClick={handleList}>Consulter la liste des demandes d'informations</button>  
                            {data !== "token crsf invalide" && data ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th >Nom</th>
                                            <th>Prénom</th>
                                            <th>Email</th>
                                            <th>Type</th>
                                            <th>Message</th>
                                            <th>Date</th>                                    
                                            <th>Statut</th>
                                            <th >Modifier statut</th>  
                                            <th>Supprimer message</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((datas, index) => (  
                                            <tr key={index} >    
                                                <td >{datas.name}</td>
                                                <td>{datas.firstName}</td>
                                                <td>{datas.email}</td>
                                                <td>{datas.type_formation}</td>
                                                <td>{datas.message}</td>
                                                <td>{ new Date(datas.created_at).toLocaleDateString()}</td>
                                                <td>{!datas.status ? "En attente" : "Traitée"}</td>
                                                <td>
                                                    <button className="p-1" onClick={() => setEditingItemId(datas.id_contact)}>Modifier</button> 
                                                    {editingItemId === datas.id_contact ? (
                                                    <form className="d-flex mt-3" action="http://localhost:3001/api/updateStatus" method="put" onSubmit={(e) => handleSubmitStatus(e, datas.id_contact)}>
                                                        <label htmlFor={`choixStatus-${datas.id_contact}`}>choix:</label>
                                                        <select name="choix" id={`choixStatus-${datas.id_contact}`}>
                                                            <option value="Traitée">Traitée</option>
                                                            <option value="En attente">En attente</option>                                        
                                                        </select>
                                                        <input type="submit" value="sauvegarder" className="bg-pink"/>
                                                    </form>
                                                ) : null}                                                      
                                                </td>
                                                <td>
                                                    <button className="p-1" onClick={() => handleSubmitRemoveStatus(datas.id_contact)}>Supprimer</button>
                                                </td>                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ):null}                                               
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>          
        </div>
    )
}

/*
export const CompteAdmin = () => {
    const authctx = React.useContext(AuthContext);    
    const [editingItemId, setEditingItemId] = React.useState(null); // Change from a boolean to an ID
    const [data, setData] = React.useState(null);

    console.log(authctx);

    const handleList = () => {        
        axios.get('http://localhost:3001/api/readContact',{            
            headers:{
                'Authorization': `Bearer ${authctx.acessToken}`,
                'crsftoken':`${authctx.crsftoken}`                
            },
            withCredentials: true
        })
        .then((result) => { 
            console.log(result);                     
            setData(result.data.data)
        })
        .catch((err) => console.log(err))         
    };

    const handleSubmitStatus = (e, id) => {
        e.preventDefault();        
        axios.put('http://localhost:3001/api/updateStatus',
            {status: e.target[0].value === "Traitée" ? true : false, id_contact: id},
            {
                headers: {'Authorization': `Bearer ${authctx.acessToken}`, 'crsftoken': `${authctx.crsftoken}`},
                withCredentials: true
            }
        )
        .then((result) => {           
           if (result) {
                handleList();
                setEditingItemId(null); // Reset editing item
           }           
        })
        .catch((err) => console.log(err))
    };

    const handleSubmitRemoveStatus = (id) => {        
        axios.delete('http://localhost:3001/api/deletesContact', {
            headers: {'Authorization': `Bearer ${authctx.acessToken}`, 'crsftoken': `${authctx.crsftoken}`},
            params: {id_contact: id},
            withCredentials: true            
        })
        .then((result) => {
            if (result) {
                handleList();
           }           
        })
        .catch((err) => console.log(err))
    };

    const logout = (e) => {
        if (e) {            
            axios.delete("http://localhost:3001/api/logout", {params: {id_user: authctx.id_user}})
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
            authctx.logout();
            window.location.href = 'http://localhost:3005/';
        }
    }

    return (
        <div className="pageCompteAdmin">
            <header>
                <NavBar />
            </header>
            <main className="marginTopMain">
                <div className="px-3">
                    <div>
                        <h1 className="text-start text-sm-center pb-4">Mon compte</h1>
                        <div className="d-flex justify-content-center pb-5"><button className="border-0 text-light bgColorb29f82" onClick={logout}>deconnexion</button></div>
                    </div>
                    <div className="p-4">
                        <section>
                            <h3>Détails du compte</h3>
                            {authctx ? <ul className="list-unstyled">                                   
                                        <li>{authctx.name}</li>
                                        <li>{authctx.firstName}</li>
                                        <li>{authctx.email}</li>                               
                            </ul> : null}
                        </section>
                        <section>
                            <button className="border-0 mb-4" onClick={handleList}>Consulter la liste des demandes d'informations</button>  
                            {data !== "token crsf invalide" && data ? (
                                <ul className="list-unstyled">
                                    {data.map((datas, index) => (
                                        <li key={index} className="d-flex-column d-sm-inline-flex border-bottom border-secondary justify-content-between">
                                            <div>{datas.name}</div>
                                            <div className="ms-4">{datas.firstName}</div>
                                            <div className="ms-4">{datas.type_formation}</div>
                                            <div className="ms-4">{datas.email}</div>
                                            <div className="ms-4">{datas.message}</div>
                                            <div className="ms-4">{!datas.status ? "En attente" : "Traitée"}</div>
                                            <div className="ms-4">
                                                <button className="" onClick={() => setEditingItemId(datas.id_contact)}>Modifier</button>
                                            </div>
                                            <div className="ms-4">
                                                {editingItemId === datas.id_contact ? (
                                                    <form className="d-flex" action="http://localhost:3001/api/updateStatus" method="put" onSubmit={(e) => handleSubmitStatus(e, datas.id_contact)}>
                                                        <label htmlFor={`choixStatus-${datas.id_contact}`}>choix:</label>
                                                        <select name="choix" id={`choixStatus-${datas.id_contact}`}>
                                                            <option value="Traitée">Traitée</option>
                                                            <option value="En attente">En attente</option>                                        
                                                        </select>
                                                        <input type="submit" value="sauvegarder" className="bg-pink"/>
                                                    </form>
                                                ) : null}                
                                            </div>                                                        
                                            <div className="ms-4"><button onClick={() => handleSubmitRemoveStatus(datas.id_contact)}>Supprimer</button></div>                                
                                        </li>
                                    ))}
                                </ul>
                            ) : null}                      
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>          
        </div>
    )
}
*/