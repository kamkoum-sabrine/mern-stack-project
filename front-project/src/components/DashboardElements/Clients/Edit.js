
//Importer les éléments du dashboard
import { Component } from 'react'
import { Topbar } from "../Topbar.js"
import { Sidebar } from "../Sidebar.js"

import axios from 'axios'
//Importer les routes des clients et les api 
//Attention lors du deploiement du site il faut changer la route edit du localhost... => www...
import urlClients from '../Config/configFront/clients.js'
import apiClients from '../Config/configBack/clients.js'


import { Scrollbar } from "react-scrollbars-custom";

export class EditClient extends Component {

    constructor(props) {
        super(props)

        this.state = {
          
            clients : [],
            index : -1, //Variable qui va contenir l'id du client à modifier     
            name : '', //Nom du client
            logo : '', //image
            img : '', //image en base 64
            insertImg : 0 //Pour valider la taille de l'image
      
           
        }
        this.changeHandler = this.changeHandler.bind(this)
      
      
    }
    changeHandler = (e) => {
       this.setState({ [e.target.name]: e.target.value })
      
     }

    componentDidMount(){
            //Récuperer l'url du page
            let url = window.location.href
            //clientUrl est un objet qui contient tous les routes du client
            let clientUrl = urlClients()

            let urlEdit = clientUrl.urlEdit
            let id = url.slice(urlEdit.length,url.length) //Pour récuperer l'id du client à partir de l'url
            this.setState({index: id})
             //apiClient est un objet qui contient tous les api du client
            let apiClient = apiClients()

            //Récuperer les informations du client concerné 
            axios.get(apiClient.getOneClient+id)
            .then((response)=>{
          
            this.setState({clients:response.data})
       
        })
    }
    uploadImage= async(e)=>{
        if (e.target.files[0].size > 5500){ //Test sur la taille de l'image
            alert ("Veuillez insérer une image de taille 400px/173")
           
        }
       else {
          
            const file = e.target.files[0]
           
            const reader = new FileReader();
            reader.onloadend = () => {
            
                let base64String = reader.result
                  .replace("data:", "")
                  .replace(/^.+,/, "");
                  base64String = "data:image/png;base64,"+base64String
                this.setState({img: base64String})
                this.setState({insertImg:1}) // Changer la valeur isertImg à 1 (true) pour valider la taille de l'image
              };
             const data = reader.readAsDataURL(file);
        }
        
      
        
     
      }
 submitHandler = e => {
        
        e.preventDefault();
        let client = {
            "_id" : this.state.index,
            "name" : this.state.name,
            "logo" : this.state.img
            
        }
       
        //Test si l'admin n'a pas rempli tous les champs du formulaire 
        //On ne change pas ces données
        if (this.state.name ==''){
            client.name = this.state.clients.name
        }
        if (this.state.img === ''){
            
            client.logo = this.state.clients.logo
            
            this.state.insertImg = 1
           
        }
      //  console.log(this.state.insertImg)
       // console.log(this.state.clients)
        if (this.state.insertImg==1){ //Si la taille de l'image est valide
            
            let id = this.state.index
          
    
            let apiClient = apiClients()
            let urlClient = urlClients()
            axios.put(apiClient.updateClient+id,client)
            .then((response)=>{
                alert('Client updated')
               
                window.location.href=urlClient.urlEdit+id
            })
            .catch (err => console.log(err))
        }
        else { //Taille de l'image non valide
            alert("Image non valide! Veuillez réessayer ! ")
        }
        
              
    }
    changeHandler = (e) => {
     
         this.setState({ [e.target.name]: e.target.value })
     
     }
    render(){
   
       const {name, logo} = this.state
      
        return(
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1000, left: 0, bottom: 0}}>
                            <div className="container-fluid">

                   
                                <div className="d-sm-flex align-items-center justify-content-between mb-4" >
                                    <h1 className="h3 mb-0 text-gray-800">Editer client </h1>
                                    
                                </div>
             
                                <div className="row">
                                <div className="col-xl-8 col-lg-7" >
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les coordonnées d'un client</h6>
                                               
                                            </div>
                                            
                                            <div className="card mb-3" style={{maxWidth: 540}}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                         <br />
                                                    <img src={this.state.clients.logo} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title"> <br />Nom :  {this.state.clients.name}</h5>
                                                       
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>     
                                    </div>
                                
                                    <div className="col-xl-8 col-lg-7" >
                                        <div className="card shadow mb-4" >
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les coordonnées d'un client</h6>
                                               
                                            </div>
                                            
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Nom </label>
                                                    <input type="text" name="name" class="form-control" placeholder='Saisir le nom du client'  value={name} onChange={this.changeHandler} />
                                                </div>
                                                <div className="mb-2">
                                                    <label  className="form-label">Logo (400/170) </label><br />
                                                    <input type="file" name={logo} value={logo} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                                </div>
                                               
                                                <p className="card-text text-dark">Veuillez ajouter un logo de taille 400px/170px  </p>
                                                <button type="submit" className="btn btn-primary" >Editer</button>
                                                </form>
                                                
                                        
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