import image from '../assets/images/backV2.png'
import $ from 'jquery';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Acceuil() {

      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      return (
        <div>
      
          <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6 align-self-center">
                        <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                          <div className="row">
                          <div data-aos="fade-right" data-aos-duration="1500">
                            <div className="col-lg-12">
                              <h2>XD-META</h2>
                              <p>Votre couche digitale de confiance ouverte pour augmenter votre capacité à prédire et piloter votre stratégie 
                                optimale d'accélération de valeur.</p>
                                <div className="col-lg-6">
                                <div className="gradient-button">
                                    <a href="#">Essayer gratuitement</a>                                
                                </div>
                        <span></span>
                        </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                      <div data-aos="fade-left" data-aos-duration="1500">
                        <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                          <img src={image} height="350" width="250" alt="" />
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
      
      )
  
  }