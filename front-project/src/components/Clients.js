
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React,{ Component } from "react";
import axios from "axios"



export class Clients extends Component{
    constructor(props){
        super(props);
        this.state = {
            clients : []
        }
   }
    componentDidMount(){
        axios.get('http://localhost:8080/api/getClients')
        .then((response)=>{
            this.setState({clients:response.data})
        
        })
  
    }
    render() {
        return (
        <div>
          
            <section id="clients" className="section position-relative clients section-bg">
            <div className="container" data-aos="fade-up">

            <div className="row">
                    <div className="col-lg-12 text-center">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <div className="section-heading">
                                    <h4>Clients <br /><br /> <br /></h4>
                            </div>
                        </div>    
                    </div>
            </div>
                <div className="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
              
                <div className="swiper-wrapper align-items-center">
               
                <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        
                        slidesPerView={this.state.clients.length}
                      //  navigation
                        
                        spaceBetween={1.5}
   
                >
                    {this.state.clients.map((item,key)=> 
                    <SwiperSlide key={key}><img src={item.logo} className="img-fluid" alt="" /></SwiperSlide>
                
                    )}
                    <div className="swiper-pagination"></div>
                </Swiper> 
                </div>
                
                </div>

            </div>
            </section>
        </div>
        )
    }
}