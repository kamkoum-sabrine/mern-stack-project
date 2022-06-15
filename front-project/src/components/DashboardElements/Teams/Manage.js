import { Component } from 'react'
import { Sidebar } from "../Sidebar.js"
import 'datatables.net'
import { Topbar } from "../Topbar.js"

import '../vendor/datatables/dataTables.bootstrap4'
import '../vendor/datatables/jquery.dataTables'
import '../css/dataTable.css'
import axios from "axios"

/**Attention !!! Lors du deploiment du site il faut mettre à jour le fichier urlTeams pour changer l'url d'edit */

import apiTeams from '../Config/configBack/teams.js'
import urlTeams from '../Config/configFront/teams.js'

import { Scrollbar } from "react-scrollbars-custom";

export class ManageTeams extends Component {


    constructor(props){
        super(props);
        this.state = {
          
            teams : [], //Objet qui va contenir tout les teams 
            src : ''
           
        }
      
       this.handlerClick = this.handlerClick.bind(this)
    }
    
    componentDidMount(){
        let apiTeam = apiTeams() //Objet qui contient les routes vers les api de Teams : get, post, put, delete
        
        
        axios.get(apiTeam.getTeams) /**Get tout les teams */
        .then((response)=>this.setState({teams:response.data}))


      
    }

    postDelete = (item, e) =>{ //En cliquant sur l'icon delete
      e.preventDefault()
     
      if (  window.confirm('Are you sure you want to delete')){ //Si l'admin a confirmé la suppression

        let apiTeam = apiTeams() //Objet qui contient les routes vers les api de Teams : get, post, put, delete

        
        axios.delete(apiTeam.deleteTeam+item._id) //La suppression du team
        .then ((response)=>{
        
         let url = urlTeams() //Objet qui contient les url du team : manage, edit, add
         window.location.href=url.urlManage //Rafraichir la page 
        })
       
        .catch((err)=>console.log(err))
      }
      
    }
    handlerClick(item,e){ //En cliquant sur l'icon edit
        e.preventDefault()
        let url = urlTeams() //Objet qui contient les url du team : manage, edit, add
       window.location.href=url.urlEdit+item._id //Redirection vers la page edit avec envoi de l'id vers l'url
       
    }
    render() {
       

        return (
            <div>
                <div id="wrapper">
                        <Sidebar />
                       
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar  style={{ width:1100, height: 550,left:0,bottom:0}}>
                            <div>
              
                <div className="container-fluid">

                  
                    <h1 className="h3 mb-2 text-gray-800">Equipes</h1>
                    <p className="mb-4">Ci-joint une table qui contient les coordonnées de l'équipe.</p>

                   
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Equipes</h6>
                        </div>
                        
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered"  width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Emploi</th>
                                            <th>Lien linkedin</th>
                                            <th>Lien facebook</th>
                                            <th>Image </th>
                                            <th>Editer</th>
                                           
                                            

                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    { this.state.teams.map((item,key)=>
                                        <tr key={key}>
                                            <td>{item.name}</td>
                                            <td>{item.job}</td>
                                            <td>{item.linkedinUrl}</td>
                                            <td>{item.facebookUrl}</td>
                                            <td ><img src={item.image} height="150"  /></td>
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