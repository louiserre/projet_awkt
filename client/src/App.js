import React from "react";
import {RouteApp} from "setup/routeManager/RouteApp";
import "App.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';



export const App = () => {
   
    return (
        <div className="app fontUnicaOne">            
            <RouteApp></RouteApp>                       
        </div>
    )
}