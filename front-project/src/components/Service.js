
import React,{ Component } from "react";
import axios from "axios"


export class Service extends Component {

        constructor(props){
          super(props);
          this.state = {
              service : {},
              services : [],
              servicesFinale : []
           
          }
      
      }
      componentDidMount(){
          axios.get('http://localhost:8080/api/getServices')
          .then((response)=>{
          
            for(let i=0;i<response.data.length;i++){
              if (response.data[i].level===1){
                this.setState({service:response.data[i]})
                this.state.services.push(this.state.service)
               
              }
              
            }
         
            this.setState({servicesFinale: this.state.services})
          
          })

      }

      
      render() {
       
        return (
          <div>
            <div id="services" className="services section">
              <div className="container">
              <div data-aos="fade-right" data-aos-duration="1500">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                      <h4>Plein de  <em>Services &amp; caractéristiques</em> </h4>
                      <img src="assets/images/heading-line-dec.png" alt="" />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="container">
                <div className="row">
               
                { this.state.servicesFinale.map((item,key)=>
                
                  <div className="col-lg-4" key={key} >
                  
                    <div data-aos="zoom-in-right" data-aos-duration="750">
                        <div className="service-item first-service">
                          <div className="icon" style={{backgroundImage: `url(${item.icon})`}}> </div>
                          <h4><br></br>{item.title}</h4>
                          <p>{item.description}</p>
                          
                        </div>
                      </div>
                  </div>             
                )}
                </div>
              </div>
            </div>

          </div>
        )
      }
  
  }