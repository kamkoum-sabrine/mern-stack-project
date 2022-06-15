import logo from '../assets/images/logo-xd-meta.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';


export function Navbar(){
    
      const [active,setActive] = React.useState(false);
      const hunderClick=()=>{
          setActive(!active);
        }
      return (
        <div>
          <header  className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <nav className="main-nav">
                      <div  >
                      <a href="index.html" className="logo" >
                        <img src={logo} alt="XD-META" height="80" width="20" />
                      </a>
                      </div>
                      
                      
                      <ul className="nav" style={{display: active?'block':'none'}}>
                      
                        <li className="scroll-to-section"><a href="#top" className="active">Acceuil</a></li>
                        <li className="scroll-to-section"><a href="#services">Services</a></li>
                        <li className="scroll-to-section"><a href="#demo">Démo</a></li>
                        <li className="scroll-to-section"><a href="#clients">Clients</a></li>
                        <li className="scroll-to-section"><a href="#team">Team</a></li>
                        <li className="scroll-to-section"></li>
                        <li className="scroll-to-section"><a href="#price">Prix</a></li>
                        <li><div className="gradient-button"><a id="modal_trigger" href="#modal"><FontAwesomeIcon icon={faSignInAlt} />  S'inscrire</a></div></li> 
                        
                      </ul>        
                      <a className={`menu-trigger ${active?'active':''}`} onClick={hunderClick}>
                          <span>Menu</span>
                      </a>
                     
                    </nav>
                  </div>
                </div>
              </div>
            </header>
          
        </div>
      )
    }
  