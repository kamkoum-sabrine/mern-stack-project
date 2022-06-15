import { Component } from 'react'
import { Sidebar } from "../Sidebar.js"
import 'datatables.net'
import { Topbar } from "../Topbar.js"

import '../vendor/datatables/dataTables.bootstrap4'
import '../vendor/datatables/jquery.dataTables'
import '../css/dataTable.css'
import axios from "axios"


import apiServices from '../Config/configBack/services.js'
import urlServices from '../Config/configFront/services.js'

import { Scrollbar } from "react-scrollbars-custom";

export class ManageService extends Component {


    constructor(props){
        super(props);
        this.state = {
          
            services : []
           
        }
   
     
       this.handlerClick = this.handlerClick.bind(this)
    }
    componentDidMount(){
        let api = apiServices() //Objet qui va contenir les routes vers les différentes api service : get, put, post, delete
        axios.get(api.getServices) //get tout les services
        .then((response)=>this.setState({services:response.data}))


    
    }

    postDelete = (item, e) =>{ //en cliquant sur l'icon delete
      e.preventDefault()
    
      if (window.confirm("Are you sure you want to delete?")){ //Si l'admin à confirmer la suppression
        let api = apiServices()  //Objet qui va contenir les routes vers les différentes api service : get, put, post, delete
        axios.delete(api.deleteService+item._id)
        .then ((response)=>{
         
         let urlService = urlServices() //Objet qui va contenir les url des différentes pages du service : edit, manage, add
         window.location.href=urlService.urlManage //Rafraichissement du page 
        })
       
        .catch((err)=>console.log(err))
      }
       
    }
    handlerClick(item,e){ //En cliquant sur l'icon edit
        e.preventDefault()
        let urlService = urlServices() //Objet qui va contenir les url des différentes pages du service : edit, manage, add
        window.location.href=urlService.urlEdit+item._id //Redirection vers la page edit avec envoi de l'id vers l'url
      
    }
    render() {
      
        return (
            <div>
                <div id="wrapper">
                        <Sidebar />
                       
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1250, left: 0, bottom: 0}}>
                            <div>
              
                <div className="container-fluid">

                  
                    <h1 className="h3 mb-2 text-gray-800">Services</h1>
                    <p className="mb-4">Ci-joint une table qui contient les services de XD-META publiés sur le site web.</p>

                   
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Services</h6>
                        </div>
                        
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered"  width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Titre</th>
                                            <th>Description</th>
                                            <th>Bloc</th>
                                            <th>Icon</th>
                                            <th>Editer </th>
                                           
                                            

                                        </tr>
                                    </thead>
                                    <tfoot>
                                    
                                        <tr >
                                            <th>Titre</th>
                                            <th>Description</th>
                                            <th>Bloc</th>
                                            <th>Icon</th>
                                            <th>Editer</th>
                                           
                                        </tr>
                                    
                                    </tfoot>
                                    <tbody>
                                    { this.state.services.map((item,key)=>
                                        <tr key={key}>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.level}</td>
                                            <td><img src={item.icon} /></td>
                                             <td>
                                            <button className="btn-circle btn-sm btn-warning" onClick={(e)=> this.handlerClick(item,e)} ><i className="fas fa-edit" ></i></button> <br />
                                           
                                            <button className="btn-circle btn-sm btn-danger" onClick={(e) => this.postDelete(item,e)}><i className="fa fa-trash" aria-hidden="true"  title="Delete this record"></i></button> <br />
                                           
                                            </td>
                                           
                                        </tr>
                                    )}   
                                    </tbody>
                                </table>
                               
                            </div>
                        </div>
                    </div>

                </div>
         
            </div>
                            </Scrollbar>
                        </div>
                    </div>
                    </div>      
                </div>
           
        )
    }
}