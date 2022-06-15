
import React,{ Component } from "react";
import axios from "axios"

export class Tuto extends Component {
    constructor(props){
        super(props);
        this.state = {
            tuto : []
        }
   }
    componentDidMount(){
        axios.get('http://localhost:8080/api/getTuto')
        .then((response)=>this.setState({tuto:response.data}))

      
    }
    render(){
        return (
            <div>
                    
                <section className="section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div data-aos="fade-right" data-aos-duration="1500">
                                <div className="section-heading">
                                        <h4>Comment utiliser <em>XD-META</em> ? <br /><br /> <br /></h4>
                                </div>
                            </div>    
                        </div>
                    <br /> <br />
                    {this.state.tuto.map((item,key)=>
                        <div className="col-lg-6 col-md-6 mb-80" key={key}>
                                <div data-aos="fade-right" data-aos-duration="1500">
                                    <div className="d-flex">
                                        <div className="mr-lg-5 mr-3">
                                            <i className="bi bi-check icon icon-light icon-bg bg-white shadow rounded-circle d-block" ></i>
                                        </div>
                                        <div>
                                            <br /> 
                                            <h4>{item.title}</h4>
                                            <p className="mb-0 ">{item.description}</p>
                                        </div>
                                    </div>
                                    <br /><br />
                                </div>
                        </div>)}
                   
                    </div>
                </div>
            
            
                </section>
                
            </div>
        )
    }
}