import React from "react";
import {FaChevronDown,FaChevronUp } from "react-icons/fa";

export const useIconBsChevron = () => {  
  const [state,dispatch] = React.useReducer(reducerClickIconMenu,{
    contact:{icon:<FaChevronDown className={`chevronDownContact`} />,type:"chevronDown",displayElement:"d-none"},
    liens:{icon:<FaChevronDown className={`chevronDownLiens`} />,type:"chevronDown",displayElement:"d-none"},
  });   

  React.useEffect(() => {    
    function clickChevron(e) {      
      switch (e.target.className.baseVal) {
        case "chevronDownContact":
          return dispatch({type:"returnChevronUpContact"})
        case "chevronUpContact":
          return dispatch({type:"returnChevronDownContact"})
        case "chevronDownLiens":
          return dispatch({type:"returnChevronUpLiens"})
        case "chevronUpLiens":
          return dispatch({type:"returnChevronDownLiens"})     
        default:
          return "problème au niveau du switch pour la function clickChevron";
      };
    };    

   document.addEventListener("click",clickChevron);
   return () => document.removeEventListener('click', clickChevron);       
  },[]);  

  return state
}
  
export const reducerClickIconMenu = (state,action) => {      
  switch (action.type) {
    case "returnChevronUpContact":
      return {
        contact:{icon:<FaChevronUp className={`chevronUpContact`} />,type:"chevronUpContact",displayElement:"d-inline-block"},
        liens:state.liens
      }
      case "returnChevronDownContact":       
      return  {
        contact:{icon:<FaChevronDown className={`chevronDownContact`} />,type:"chevronDownContact",displayElement:"d-none"},
        liens:state.liens
      } 
      case "returnChevronUpLiens":
      return {
        contact:state.contact,
        liens:{icon:<FaChevronUp className={`chevronUpLiens`} />,type:"chevronUpLiens",displayElement:"d-inline-block"},
        
      }
      case "returnChevronDownLiens":       
      return  {
        contact:state.contact,
        liens:{icon:<FaChevronDown className={`chevronDownLiens`} />,type:"chevronDownLiens",displayElement:"d-none"},        
      } 
    default:      
     return "problème au niveau du réducer pour le hook personnaliser useClickIconChevron";      
  }    
}