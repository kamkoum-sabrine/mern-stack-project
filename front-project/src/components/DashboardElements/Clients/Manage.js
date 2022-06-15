import { Component } from 'react'
import { Sidebar } from "../Sidebar.js"
import 'datatables.net'
import { Topbar } from "../Topbar.js"

import '../vendor/datatables/dataTables.bootstrap4'
import '../vendor/datatables/jquery.dataTables'
import '../css/dataTable.css'
import axios from "axios"


import apiClients from '../Config/configBack/clients.js'

import urlClients from '../Config/configFront/clients.js'

import { Scrollbar } from "react-scrollbars-custom";

export class ManageClients extends Component {


    constructor(props){
        super(props);
        this.state = {
          
            clients : []
           
        }
    
       this.handlerClick = this.handlerClick.bind(this)
    }
    componentDidMount(){
        let apiClient = apiClients()
        axios.get(apiClient.getClient)
        .then((response)=>this.setState({clients:response.data}))


    }

    postDelete = (item, e) =>{
      e.preventDefault()
     
      if (window.confirm('Are you sure you want to delete ?')){

            let apiClient = apiClients()
            let urlClient = urlClients()
                axios.delete(apiClient.deleteClient+item._id)
                .then ((response)=>{
                console.log('supprimee')
                window.location.href=urlClient.urlManage
                })
            
                .catch((err)=>console.log(err))
        }
       
    }
    handlerClick(item,e){
        e.preventDefault()
        //En cliquant sur le bouton edit => Redirecion vers la page edit et envoi de l'id vers l'url
        let urlClient = urlClients()

       window.location.href=urlClient.urlEdit+item._id
    
    }
    render() {
       
        return (
            <div>
                <div id="wrapper">
                        <Sidebar />
                       
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1250,left:0,bottom:0 }}>
                            <div>
              
                <div className="container-fluid">

                  
                    <h1 className="h3 mb-2 text-gray-800">Clients</h1>
                    <p className="mb-4">Ci-joint une table qui contient les clients inscrits sur la plateforme XD-META</p>

                   
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Clients</h6>
                        </div>
                        
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered"  width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Logo</th>
                                            <th>Editer</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                    
                                        <tr >
                                            <th>Nom</th>
                                            <th>Logo</th>
                                            <th>Editer</th>
                                        </tr>
                                    
                                    </tfoot>
                                    <tbody>
                                    { this.state.clients.map((item,key)=>
                                        <tr key={key} height="120" width="120">
                                            <td>{item.name}</td>
                                            <td height="120" width="120"><img src={item.logo} height='50' width='50'/></td>
                                            <td>
                                                <button className="btn-circle btn-sm btn-warning" onClick={(e)=> this.handlerClick(item,e)} ><i class="fas fa-edit" ></i></button> <br />
                                            
                                                <button className="btn-circle btn-sm btn-danger" onClick={(e) => this.postDelete(item,e)}><i class="fa fa-trash" aria-hidden="true"  title="Delete this record"></i></button> <br />
                                            
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