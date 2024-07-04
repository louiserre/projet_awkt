import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from "pages/about/About";
import {Contact} from "pages/contact/Contact";
import {Home} from "pages/home/Home";
import {Training} from "pages/training/Training";
import {Fight} from "pages/fight/Fight";
import {Shot} from "pages/shot/Shot";
import {Technical} from "pages/technical/Technical";
import {SignIn} from "pages/signin/SignIn";
import {CompteAdmin} from "pages/compteAdmin/CompteAdmin";
import {PrivacyPolicy} from "pages/privacyPolicy/PrivacyPolicy";

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/about" element={<About/>}/>                
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>                
                <Route path="/training" element={<Training/>}/>
                <Route path="/training/fight" element={<Fight/>}/>
                <Route path="/training/shot" element={<Shot/>}/>
                <Route path="/training/technical" element={<Technical/>}/>
                <Route path="/compte/admin" element={<CompteAdmin/>}/>
                <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/> 
            </Routes>
    </BrowserRouter>
        
    )
};