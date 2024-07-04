import React from "react";
import "common/navBar/style.css";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import logo from "assets/brand/logo.png";
import { Link } from "react-router-dom";
import {useStyleMenu} from "common/navBar/hooks/menu.js";


export const NavBar = () => {  
  const styleMenu = useStyleMenu();  
  const [color,setColor] =React.useState(null);
  
  

  React.useEffect(() => {
    if (document.location.href === "http://localhost:3005/") {
      setColor(null)
    }else{
      setColor("bgColor")
    }
  },[]); 
  

  


  
  return (
    <React.Fragment>
    <nav style={{height:styleMenu.styleMenu.statusMenu ? styleMenu.styleMenu.heightNavbar: styleMenu.styleMenu.heightNavbar }} className={`containerNavBar position-absolute ${styleMenu.styleMenu.sizeNavbar} top-0 z-1 d-flex justify-content-between ${color} `}>      
       <div className={`containerIconMenu&Search  d-flex justify-content-center align-items-center ${styleMenu.styleMenu.containerIconMenuSearch}`}>           
          <div className={`containerIconMenu d-md-none`}>
            <AiOutlineMenu className="text-light iconMenu"></AiOutlineMenu>
          </div>            
          <div className="containerIconSearch d-none d-md-inline-block d-none d-md-inline-block">
            <AiOutlineSearch className="text-light"></AiOutlineSearch>
          </div>              
        </div>
        <div className={`containerLinks d-flex ${styleMenu.styleMenu.containerLink}  justify-content-md-center  align-items-md-center fontUnicaOne`}>
          <div className={`containerButton ${styleMenu.styleMenu.containerButtonMenu} w-100 d-flex justify-content-end`}>
            <button className="border-0 fs-4 buttonCloseMenu bg-light" >X</button>
          </div>
          <div className={`containerLinkAbout&Training ${styleMenu.styleMenu.displayLink}  d-md-inline-block `}>
            <ul className={`d-flex ${styleMenu.styleMenu.containerUl} containerUls list-unstyled`}>
              <li className={`p-1 containerLi ${styleMenu.styleMenu.containerLi}`}>
                <Link to='/about' className={`text-nowrap text-light text-decoration-none ${styleMenu.styleMenu.colorLink}`}>A PROPOS</Link> 
              </li>
              <li className={`containerLi d-flex flex-column containerMenuTraining ${styleMenu.styleMenuTraining.styleLiTraining} ${styleMenu.styleMenu.containerLi}`} >
                <div>
                  <Link to='/training' className={`text-nowrap text-decoration-none ${styleMenu.styleMenu.colorLink} ${styleMenu.styleMenuTraining.styleLinkTraining}`}>
                    FORMATIONS                  
                  </Link>
                  <span className={`containerChevronDown ${styleMenu.iconFaChevron.styleContainerIcon}`}>                    
                      {styleMenu.iconFaChevron.icon}                      
                  </span>  
                </div>                               
                <ul className={`bg-light d-flex flex-column justify-content-start p-0 ${styleMenu.iconFaChevron.displayElement} ${styleMenu.styleMenuTraining.displayMenuTraining} list-unstyled`}>                                 
                  <li className={`${styleMenu.styleMenuTraining.containerLiTraining}`} ><Link to='/training/technical' className="text-dark text-decoration-none text-nowrap">TECHNIQUE OPERATIONNELLE</Link></li>
                  <li className={`${styleMenu.styleMenuTraining.containerLiTraining}`}><Link to='/training/shot' className="text-dark text-decoration-none text-nowrap">TIR PROFESSIONNEL</Link></li>
                  <li className={`${styleMenu.styleMenuTraining.containerLiTraining}`}><Link to='/training/fight' className="text-dark text-decoration-none text-nowrap">COMBAT CORPS A CORPS</Link></li>
                </ul>               
              </li>
            </ul> 
          </div>
          <div className={`containerLogo ${styleMenu.styleMenu.displayLogo}`}>
            <Link to="/">
              <img src={logo} alt="logo entreprise" className="logo"/>
            </Link>            
              
          </div>
          <div className={`containerLinkContact&Profil ${styleMenu.styleMenu.displayLink} d-md-inline-block`}>
            <ul className={`d-flex ${styleMenu.styleMenu.containerUl} containerUls list-unstyled`}>
              <li className={`p-1 containerLi ${styleMenu.styleMenu.containerLi}`}>
                <Link to="/contact" className={`text-nowrap  text-light text-decoration-none ${styleMenu.styleMenu.colorLink}`}>CONTACT</Link>
              </li>
              <li className={`p-1 containerLi ${styleMenu.styleMenu.containerLi}`}>
                <Link to="/signin" className={`text-nowrap text-light text-decoration-none ${styleMenu.styleMenu.colorLink}`}>
                  <span className={`${styleMenu.styleMenu.displayIconUser}`}><AiOutlineUser className="text-light"/></span>
                  SE CONNECTER
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`containerSearch  ${styleMenu.styleMenu.displayMenuSearch} d-flex justify-content-center align-items-center`}>
          <AiOutlineSearch className={`text-light ${styleMenu.styleMenu.search}`}></AiOutlineSearch>
        </div>         
    </nav>  
    {styleMenu.styleMenu.statusMenu ? 
      <div className={`position-absolute  top-0  d-flex justify-content-between ${color} container-fluid`}>
        <div className={`d-flex justify-content-center align-items-center`}>
            <AiOutlineMenu className="text-light "></AiOutlineMenu>
        </div>
        <div className={``}>
          <Link to="/">
            <img src={logo} alt="logo entreprise" className="logo"/>
          </Link>              
        </div>
        <div className={`d-flex justify-content-center align-items-center`}>
          <AiOutlineSearch className={`text-light `}></AiOutlineSearch>
        </div>

      </div> 
      : null
    }                    
  </React.Fragment>
  )
};