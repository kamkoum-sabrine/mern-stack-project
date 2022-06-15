import { Component } from 'react'
import { Sidebar } from "../Sidebar.js"
import 'datatables.net'
import { Topbar } from "../Topbar.js"

import '../vendor/datatables/dataTables.bootstrap4'
import '../vendor/datatables/jquery.dataTables'
import '../css/dataTable.css'
import axios from "axios"

import apiNews from '../Config/configBack/news.js'
import urlNews from '../Config/configFront/news'

import { Scrollbar } from "react-scrollbars-custom";

export class ManageNews extends Component {


    constructor(props){
        super(props);
        this.state = {
          
            news : []
           
        }
     
       this.handlerClick = this.handlerClick.bind(this)
    }
    componentDidMount(){

        //apiNew object qui contient les routes vers les api de News
        let apiNew = apiNews()

        //Récupérer tous les news à partir du bd
        axios.get(apiNew.getNews)
        .then((response)=>this.setState({news:response.data}))


    
    }

    postDelete = (item, e) =>{
      e.preventDefault()
     

      if (window.confirm('Are you sure you want to delete ?')){ //Si l'admin a confirmé la suppression
            
            //apiNew object qui contient les routes vers les api de News
            let apiNew = apiNews()

            //Supprimer l'acualité
            axios.delete(apiNew.deleteNews+item._id)
            .then ((response)=>{

                //urlNew objet qui contient les url de news : edit/manage/edit
                let urlNew = urlNews()
                //Rafraichir la page manage
                window.location.href=urlNew.urlManage
            })
        
            .catch((err)=>console.log(err))
        }
       
    }

    handlerClick(item,e){ //En cliquant sur l'icon edit
        e.preventDefault()

         //urlNew objet qui contient les url de news : edit/manage/edit
        let urlNew = urlNews()
        //Redirection vers la page d'edit avec envoi de l'id vers l'url
       window.location.href=urlNew.urlEdit+item._id
      
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

                  
                    <h1 className="h3 mb-2 text-gray-800">Actualités</h1>
                    <p className="mb-4">Ci-joint une table qui contient les actualités publiés sur le site XD-META.</p>

                   
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Actualités</h6>
                        </div>
                        
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered"  width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Titre</th>
                                           
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Editer</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                    
                                        <tr >
                                            <th>Title</th>
                                           
                                           <th>Description</th>
                                           <th>Image</th>
                                            <th>Editer</th>
                                        </tr>
                                    
                                    </tfoot>
                                    <tbody>
                                    { this.state.news.map((item,key)=>
                                        <tr key={key} height="120" width="120">
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td height="120" width="120"><img src={item.image} height='50' width='50'/></td>
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