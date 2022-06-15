import { Component } from 'react';
import apiServices from './Config/configBack/services'
import apiTeams from './Config/configBack/teams'
import apiClients from './Config/configBack/clients'
import apiNews from './Config/configBack/news'

import axios from 'axios'
export class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
          
            services : [],
            teams : [],
            clients : [],
            news : []
           
        }
        //let services = []
       // this.handlerClick = this.handlerClick.bind(this)
    
    }
    componentDidMount(){
        let apiServ = apiServices()
        let apiTeam = apiTeams()
        let apiClient = apiClients()
        let apiNew = apiNews()

        axios.get(apiServ.getServices)
        .then((response)=>this.setState({services:response.data}))

        axios.get(apiTeam.getTeams)
        .then((response)=>this.setState({teams:response.data}))
        
        axios.get(apiClient.getClient)
        .then((response)=>this.setState({clients:response.data}))
        
        axios.get(apiNew.getNews)
        .then((response)=>this.setState({news:response.data}))
    
    }



    render(){
      //  const {name,job,facebookUrl,linkedinUrl,image,img} = this.state
       
        return (
            <div>
                <div className="container-fluid" style={{overflow: 'hidden'}}>

                   
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Tableau de bord</h1>
                       
                    </div>

            
                    <div className="row">
                     
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2 px-4">
                                <div className="card-body">
                                <a href="/dashboard/clients/manage/" >
                                    <div className="row no-gutters align-items-center">
                                   
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                 Clients</div>
                                            <div className="h5 mb-2 font-weight-bold text-gray-800">{this.state.clients.length}</div>
                                        </div>
                                        
                                        <div className="col-auto">
                                        <i className="bi bi-people fa-2x text-gray-300"></i>
                                        </div>
                                       
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                       

                    
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2 px-4">
                                <div className="card-body">
                                <a href="./dashboard/services/manage">
                                    <div className="row no-gutters align-items-center">
                                  
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Services</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.services.length}</div>
                                        </div>
                                        
                                        <div className="col-auto">
                                            <i className="bi bi-gear fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                      

                      
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2 px-4">
                                <div className="card-body">
                                <a href="./dashboard/teams/manage">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                Equipes</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.services.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="bi bi-people fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                       
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2 px-4">
                                <div className="card-body">
                                <a href="./dashboard/news/manage">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Actualités</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.news.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>


                   
                   
                    </div>

                </div>
           
        )
    }
}
