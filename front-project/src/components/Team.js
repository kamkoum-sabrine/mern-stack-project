
import React,{ Component } from "react";
import axios from "axios"



export class Team extends Component{
   constructor(props){
        super(props);
        this.state = {
            team : []
        }
   }
    componentDidMount(){
        axios.get('http://localhost:8080/api/getTeam')
        .then((response)=>this.setState({team:response.data}))
   
    }

    render() {
        return(
            <div>
              <section id="team" className="team">
                <div className="container">
                <div className="row">
                <div className="col-lg-8 offset-lg-5">
                  <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <h4>Team</h4>
                  
                    <img src="assets/images/heading-line-dec.png" alt="" />
                    <p></p>
                  </div>
                  </div>
                </div>
              </div>
                   

                    <div className="row">
                    {this.state.team.map((item,key)=>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100" key={key}>
                        

                       
                        <div className="member">
                        <img src={item.image} className="img-fluid" alt="" />
                        <div className="member-info">
                            <div className="member-info-content">
                            <h4>{item.name}</h4>
                            <span>{item.job}</span>
                            </div>
                            <div className="social">
                            <a href=""><i className="bi bi-twitter"></i></a>
                            <a href={item.facebookUrl}><i className="bi bi-facebook"></i></a>
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href={item.linkedinUrl}><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

              
                     )}

                    </div>

                </div>
                </section>
            </div>
        )
    }
}
