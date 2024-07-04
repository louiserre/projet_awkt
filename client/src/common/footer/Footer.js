import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa";
import "common/footer/style.css";
import {useIconBsChevron} from "common/footer/hooks/iconBsChevron.js";



export const Footer = () => {
    
    const iconChevron = useIconBsChevron();
  
  return (
    <React.Fragment>
      <footer className="containerFotter  d-flex flex-column bgColor py-2 py-md-4">
        <div className="containerLink d-flex flex-column flex-md-row justify-content-around ">
          <div className="containerResauxSociaux d-flex flex-column d-flex p-2 m-2 m-md-4">
            <span className="containerFindUs text-light  mb-2 ">RESEAUX SOCIAUX</span>                
            <ul className="d-flex  p-0 justify-content-start justify-content-md-between">
              <li className=" me-2 me-md-0">
                <a className="" href="https://www.facebook.com/profile.php?id=100081578590517">
                  <span ><FaFacebook className="text-light"></FaFacebook></span>
                </a>
              </li>
              <li className="me-2 me-md-0">
                <a className="" href="https://www.instagram.com/arawaktactics/">
                  <span><FaInstagram className="text-light"></FaInstagram></span>
                </a>
              </li> 
              <li className="me-2 me-md-0">
                <a className="" href="https://www.instagram.com/arawaktactics/">
                  <span><FaLinkedin className="text-light"/></span>
                </a>
              </li>              
            </ul>
          </div>          
          <div className="containerContact d-flex flex-column justify-content-start p-2 m-2 m-md-4">
            <span className="text-light mb-2" >CONTACT<span className="d-sm-none" >{iconChevron.contact.icon}</span></span>
            <span className={`text-light ${iconChevron.contact.displayElement} d-sm-inline-block `}>Email: arawak.tactics@gmail.com</span>                
          </div>
          <div className="containerLinks d-flex flex-column justify-content-start p-2 m-2 m-md-4">                
            <span className="text-light  mb-2">LIENS<span className="d-sm-none">{iconChevron.liens.icon}</span></span>
            <ul className={`p-0 ${iconChevron.liens.displayElement} d-sm-inline-block`}>
              <li className={`p-1 containerLi`}>
                <Link to="/contact" className="text-light text-nowrap  text-decoration-none">CONTACT</Link>
              </li>
              <li className={`p-1 containerLi`}>
                <Link to="/privacyPolicy" className="text-light text-nowrap  text-decoration-none">POLITIQUE DE CONFIDENTIALITE</Link>
              </li>
            </ul>                                
          </div>
        </div>                
        <div className="containerCreator d-flex justify-content-center mt-2  mt-md-4">          
          <span className="text-light">&#169; 2024 ARAWAK TACTICS. Tous droits réservés. | Conçu par Virginia LOUISERRE</span>
        </div>                 
      </footer>
    </React.Fragment>
  )
}