import news from '../assets/images/post-5.jpg';
import React,{ Component } from "react";
import axios from "axios"

export class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            news : []
        }
   }
    componentDidMount(){

        /*Récupération des news à partir du bd*/
        axios.get('http://localhost:8080/api/getNews')
        .then((response)=>this.setState({news:response.data}))

      
    }
    render() {
        return (
            <div>
                <section className="section" id="news">
                    <div className="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div data-aos="fade-right" data-aos-duration="1500">
                                <div className="section-heading">
                                        <h4>Actualités <br /><br /> <br /></h4>
                                </div>
                            </div>    
                        </div>
                        {this.state.news.map((item,key)=>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={key} >
                        <div data-aos="fade-right" data-aos-duration="1500">
                                <article className="card shadow">
                                <img className="rounded card-img-top" src={item.image} alt="post-thumb" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a className="text-dark" href="blog-single.html">{item.title}</a>
                                        </h4>
                                        <p className="cars-text">{item.description}</p>
                                        <a href="blog-single.html" className="btn btn-xs btn-primary">Read More</a>
                                    </div>
                                </article>
                            </div>
                        </div>)}
                      
                        </div>
                    </div>
                </section>
            </div>
        )
        
    }
}