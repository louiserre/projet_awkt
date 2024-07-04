import React from "react";
import {FaChevronDown,FaChevronUp } from "react-icons/fa";

export const useStyleMenu = () => {  
  const [state, dispatch] = React.useReducer(reducer,{
    styleMenu:{
      statusMenu:false,   
      sizeNavbar:"container-fluid",
      heightNavbar:null,
      displayLink:"d-none",    
      displayLogo:"d-inline-block",
      containerLink:null, 
      containerButtonMenu:"d-none",
      colorLink:"text-light",
      containerUl:"p-0",
      containerLi:null,    
      displayIconUser:null,
      containerIconMenuSearch:null,
      colorChevronDown:"text-light",
      search:"d-md-none"      
    },
    iconFaChevron:{
      icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-none", styleContainerIcon:"text-light"
    },
    styleMenuTraining:{
      displayMenuTraining:"d-none  position-absolute bottom-0",
      styleLinkTraining:"text-light",
      styleLiTraining:"p-1",
      containerLiTraining:null
    }    
  });   

  /*

  // fonction de base
  React.useEffect(() => {
    const handleOpenMenu = (e) => {
      if (e.target.classList.contains("iconMenu")) {      
        dispatch({type:"openMenu",height:window.innerHeight});        
      };
    };
    document.addEventListener("click",handleOpenMenu);
    return () => document.removeEventListener("click",handleOpenMenu);
  },[]);*/



  //document.getElementById("href").innerHTML = "L'URL complète de cette page est:<br>" + window.location.href;
  //let elem = window.location.href;
  //let elem = document.querySelector(".containerPageHome");
  //let rect = elem.getBoundingClientRect();
  
  //console.log(rect);

  React.useEffect(() => { 
    //let location = window.location.href;

    function returnContainerElement(location) {
      switch (location) {
        case "http://localhost:3005/about":         
          return document.querySelector(".pageAbout");         
        case "http://localhost:3005/":          
          return document.querySelector(".containerPageHome");          
        case "http://localhost:3005/signin":
          return document.querySelector(".pageSignUp");          
        case "http://localhost:3005/contact":
          return document.querySelector(".pageContact");          
        case "http://localhost:3005/training":
          return document.querySelector(".pageTraining");          
        case "http://localhost:3005/training/fight":
          return document.querySelector(".pageFight");          
        case "http://localhost:3005/training/shot":
          return document.querySelector(".pageShot");          
        case "http://localhost:3005/training/technical":
          return document.querySelector(".pageTechnical");        
        case "http://localhost:3005/compte/admin":
          return document.querySelector(".pageCompteAdmin");        
        case "http://localhost:3005/privacyPolicy":
          return document.querySelector(".pageShot");      
        default:
          return "cette url n'existe pas";          
      }      
    }

    
    //console.log(location);
    

    

    const handleOpenMenu = (e) => {
      if (e.target.classList.contains("iconMenu")) {      
        dispatch({type:"openMenu",height:returnContainerElement(window.location.href).getBoundingClientRect().bottom});         
       
      };
    };
    document.addEventListener("click",handleOpenMenu);
    return () => document.removeEventListener("click",handleOpenMenu);
  },[]);


  

  React.useEffect(() => {
    function closeMenu(event) {
      const classNameElement = event.target.className;      
      if (state.styleMenu.statusMenu) {
        if(
          !event.target.classList.contains("containerNavBar") &&
          !event.target.classList.contains("containerButton") &&
          !event.target.classList.contains("containerLinks") &&
          !event.target.classList.contains("containerLinkContact&Profil") &&
          !event.target.classList.contains("containerLinkAbout&Training ") &&
          !event.target.classList.contains("containerUls") &&
          !event.target.classList.contains("containerContain") &&
          !event.target.classList.contains("containerLi") &&
          event.target.className ===`${classNameElement || "buttonCloseMenu"}`          
          ){
            dispatch({type:"closeMenu"});
        };
      };      
    };

    document.addEventListener("click",closeMenu);
    return () => document.removeEventListener("click",closeMenu);
  },[state]);

  React.useEffect(() => {
    const containerMenuTraining = document.querySelector(".containerMenuTraining");    
    
    containerMenuTraining.addEventListener("mouseover",(e) => {
      if (e && window.innerWidth >= 768) {         
        dispatch({type:"displayTrainingMenuOnHover"});
      }
    });

    containerMenuTraining.addEventListener("mouseout",(e) => {
      if (e && window.innerWidth >= 768) {           
        dispatch({type:"displayNoneTrainingMenuOnHover"});
      }
    });      

    return () => {
      document.removeEventListener("mouseover",containerMenuTraining);
      document.removeEventListener("mouseout",containerMenuTraining);        
    }    
  },[]);

  React.useEffect(() => {    
    function clickChevron(e) {      
      switch (e.target.className.baseVal) {
        case "chevronDownTraining":
          return dispatch({type:"returnChevronUpTraining"});
        case "chevronUpTraining":
          return dispatch({type:"returnChevronDownTraining"});             
        default:
          return "problème au niveau du switch pour la function clickChevron";
      };
    };   

    document.addEventListener("click",clickChevron);
    return () => document.removeEventListener('click', clickChevron);       
  },[]);

  React.useEffect(() => {    
    function closeMenuSize() {
      if (state.styleMenu.statusMenu === true & window.innerWidth >= 768 ) {        
        dispatch({type:"closeMenuSize"});       
       };
    };
    visualViewport.addEventListener("resize", closeMenuSize);
    return () => visualViewport.removeEventListener("resize", closeMenuSize);
  },[state]);  
  
  
  
  

  return state;
};

function reducer(state,action) {
  switch (action.type) {
    case "openMenu":      
      return {
        styleMenu:{
          statusMenu:true,          
          sizeNavbar:`p-4 bg-light animationMenuOpen`, //"h-100 p-4 bg-light" animationMenuOpen
          heightNavbar:`${action.height}px`,
          displayLink:"d-inline-block",        
          displayLogo:"d-none",
          containerLink:"flex-column p_0",        
          containerButtonMenu:"d-inline-block py-4 border-bottom border-dark",
          colorLink:"text-dark", 
          containerUl:"flex-column m-0",
          containerLi:"py-4 border-bottom border-dark",                 
          displayIconUser:"d-none",
          containerIconMenuSearch:"d-none",
          colorChevronDown:"text-dark",
          search:"d-none"
        },
        iconFaChevron:{
          icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-none",styleContainerIcon:"text-dark"
        },
        styleMenuTraining:{
          displayMenuTraining:null,
          styleLinkTraining:"text-dark bg-light",
          styleLiTraining:"p-1",
          containerLiTraining:null, 
        }    
      };
    case "closeMenu":
      return {
        styleMenu:{
          statusMenu:false,
          sizeNavbar:`container-fluid animationMenuClose`, //"container-fluid"
          heightNavbar:null,
          displayLink:"d-none",          
          displayLogo:"d-inline-block",
          containerLink:null,
          containerButtonMenu:"d-none",
          colorLink:"text-light",
          containerUl:"p-0",
          containerLi:null,          
          displayIconUser:null,
          containerIconMenuSearch:null,  
          colorChevronDown:"text-light",
          search:"d-md-none"
        },
        iconFaChevron:{
          icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-none",styleContainerIcon:"text-light"
        },
        styleMenuTraining:{
          displayMenuTraining:"position-absolute bottom-0",
          styleLinkTraining:"text-light",
          styleLiTraining:"p-1",
          containerLiTraining:null, 
        }   
      };
    case "displayTrainingMenuOnHover":
      return {
        styleMenu:{
          statusMenu:false,
          sizeNavbar:"container-fluid",
          heightNavbar:null,
          displayLink:"d-none",          
          displayLogo:"d-inline-block",
          containerLink:null,
          containerButtonMenu:"d-none",
          colorLink:"text-light",
          containerUl:"p-0",
          containerLi:null,          
          displayIconUser:null,
          containerIconMenuSearch:null,  
          colorChevronDown:"text-dark",
          search:"d-md-none"
        },
        iconFaChevron:{
          icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-inline-block",styleContainerIcon:"text-dark"
        },
        styleMenuTraining:{
          displayMenuTraining:"position-absolute bottom-0",
          styleLinkTraining:"text-dark",
          styleLiTraining:"bg-light p-0",
          containerLiTraining:null, 
        }   
      };
    case "displayNoneTrainingMenuOnHover":
      return {
        styleMenu:{
          statusMenu:false,
          sizeNavbar:"container-fluid",
          heightNavbar:null,
          displayLink:"d-none",          
          displayLogo:"d-inline-block",
          containerLink:null,
          containerButtonMenu:"d-none",
          colorLink:"text-light",
          containerUl:"p-0",
          containerLi:null,          
          displayIconUser:null,
          containerIconMenuSearch:null,  
          colorChevronDown:"text-light",
          search:"d-md-none"
        },
        iconFaChevron:{
          icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-none",styleContainerIcon:"text-light"
        },
        styleMenuTraining:{
          displayMenuTraining:"position-absolute bottom-0",
          styleLinkTraining:"text-light",
          styleLiTraining:"p-1",
          containerLiTraining:null, 
        }   
      };
    case "returnChevronUpTraining":
      return {
        styleMenu:{
          statusMenu:true,
          sizeNavbar:"p-2 bg-light", //"h-100 p-2 bg-light"
          heightNavbar:`${action.height}px`,
          displayLink:"d-inline-block",        
          displayLogo:"d-none",
          containerLink:"flex-column p_0",        
          containerButtonMenu:"d-inline-block py-4 border-bottom border-dark",
          colorLink:"text-dark", 
          containerUl:"flex-column m-0",
          containerLi:"py-4 border-bottom border-dark",                 
          displayIconUser:"d-none",
          containerIconMenuSearch:"d-none",
          colorChevronDown:"text-dark",
          search:"d-none"
        },
        iconFaChevron:{
          icon:<FaChevronUp className={`chevronUpTraining`} />,type:"chevronUpTraining",displayElement:"d-inline-block",styleContainerIcon:"text-dark"
        },
        styleMenuTraining:{
          displayMenuTraining:null,
          styleLinkTraining:"text-dark bg-light",
          styleLiTraining:"p-1",
          containerLiTraining:"ms-4 py-1"
        }    
      };
    case "returnChevronDownTraining":
      return {
        styleMenu:{
          statusMenu:true,
          sizeNavbar:"p-2 bg-light",//"h-100 p-2 bg-light"
          heightNavbar:`${action.height}px`, 
          displayLink:"d-inline-block",        
          displayLogo:"d-none",
          containerLink:"flex-column p_0",        
          containerButtonMenu:"d-inline-block py-4 border-bottom border-dark",
          colorLink:"text-dark", 
          containerUl:"flex-column m-0", 
          containerLi:"py-4 border-bottom border-dark",               
          displayIconUser:"d-none",
          containerIconMenuSearch:"d-none",
          colorChevronDown:"text-dark",
          search:"d-none"
        },
        iconFaChevron:{
          icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-none",styleContainerIcon:"text-dark"
        },
        styleMenuTraining:{
          displayMenuTraining:null,
          styleLinkTraining:"text-dark bg-light",
          styleLiTraining:"p-1",
          containerLiTraining:null, 
        }    
      };
    case "closeMenuSize":
      return {
        styleMenu:{
          statusMenu:false,
          sizeNavbar:"container-fluid",
          heightNavbar:null,
          displayLink:"d-none",          
          displayLogo:"d-inline-block",
          containerLink:null,
          containerButtonMenu:"d-none",
          colorLink:"text-light",
          containerUl:"p-0",
          containerLi:null,          
          displayIconUser:null,
          containerIconMenuSearch:null,  
          colorChevronDown:"text-light",
          search:"d-md-none"
        },
        iconFaChevron:{
          icon:<FaChevronDown className={`chevronDownTraining`} />,type:"chevronDownTraining",displayElement:"d-none",styleContainerIcon:"text-light"
        },
        styleMenuTraining:{
          displayMenuTraining:"position-absolute bottom-0",
          styleLinkTraining:"text-light",
          styleLiTraining:"p-1",
          containerLiTraining:null, 
        }   
      };  
    default:
      return "probleme reducer pour le hook personnalisé useStyleMenu";
  };
};