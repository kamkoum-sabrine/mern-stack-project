import { Component } from 'react'
import logo from './img/logo-xd-meta.png';



export class Sidebar extends Component {
   
 
    render() {
       
        return (
            <div>
     
                <ul className="navbar-nav  sidebar sidebar-dark accordion" style={{backgroundColor: '#386d8e'}} id="accordionSidebar">

                  
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div className="sidebar-brand-icon ">
                            <img src={logo} height="70" width="70" alt="..."/>
                        </div>
                        <div className="sidebar-brand-text ">XD-META </div>
                    </a>

                  
                    <hr className="sidebar-divider my-0" />

                   
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Tableau de bord</span></a>
                    </li>

                   
                    <hr className="sidebar-divider" />

                   
                    <div className="sidebar-heading">
                        Composantes
                    </div>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="bi bi-gear "></i>
                            <span>Services</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Bloc services</h6>
                                <a className="collapse-item" href="/dashboard/services/manage">Gérer</a>
                                <a className="collapse-item" href="/dashboard/services/add">Ajouter</a>
                            </div>
                        </div>
                    </li>

                   
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="bi bi-people"></i>
                            <span>Equipe</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Bloc Teams</h6>
                                <a className="collapse-item" href="/dashboard/teams/manage">Gérer</a>
                                <a className="collapse-item" href="/dashboard/teams/add">Ajouter</a>
                               
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                                <i className="bi bi-people"></i>
                            <span>Clients</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Bloc clients</h6>
                                <a className="collapse-item" href="/dashboard/clients/manage">Gérer</a>
                                <a className="collapse-item" href="/dashboard/clients/add">Ajouter</a>
                                
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseNews"
                            aria-expanded="true" aria-controls="collapseNews">
                            <i className="fas fa-comments"></i>
                            <span>Actualités</span>
                        </a>
                        <div id="collapseNews" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Bloc News</h6>
                                <a className="collapse-item" href="/dashboard/news/manage">Gérer</a>
                                <a className="collapse-item" href="/dashboard/news/add">Ajouter</a>
                               
                            </div>
                        </div>
                    </li>
                 
                </ul>
             
            </div>
        )
    }
}