import { Component } from 'react'
import { Topbar } from "../Topbar.js"
import { Sidebar } from "../Sidebar.js"

import axios from 'axios'

/**Attention !!! Lors du deploiment du site il faut mettre à jour le fichier urlServices pour changer l'url d'edit */

import urlServices from '../Config/configFront/services'
import apiServices from '../Config/configBack/services'

import { Scrollbar } from "react-scrollbars-custom";


export class EditService extends Component {

    constructor(props) {
        super(props)

        this.state = {
          
            services : [],
            index : -1, //Variable qui va contenir l'id du service à éditer
          
                title : '',
                description : '',
                icon : '',
                level : 0, // Numéro du bloc du service : bloc 1 ou 2
                img : '', //Image convertée en base 64
                insertImg : 0 //Pour valider la taille de l'image
      
           
        }
        this.changeHandler = this.changeHandler.bind(this)
      
      
    }
    changeHandler = (e) => {
    
         this.setState({ [e.target.name]: e.target.value })
     
     }
     uploadImage= async(e)=>{ //Pour convertée l'image à la base 64
        if (e.target.files[0].size>3700) { //Si la taille de l'image est invalide
            alert('Veuillez insérer un icon de taille 50px/50px')
        }
        else { //Si la taille de l'image est valide => La conversion à la base 64
            
            const file = e.target.files[0]
            
            const reader = new FileReader();
            reader.onloadend = () => {
             
                let base64String = reader.result
                  .replace("data:", "")
                  .replace(/^.+,/, "");
                  base64String = "data:image/png;base64,"+base64String
                this.setState({img: base64String})
               
                this.setState({insertImg: 1}) // => Mettre à jour la variable insetImg : insertImg = true
               
              };
             const data = reader.readAsDataURL(file);
             
        }
        
     
      }
    componentDidMount(){

        let url = window.location.href //Récuperer l'url du page edit service 

       let urlSer = urlServices() //Objet qui va contenir les url des différentes pages du service : edit, manage, add
 
        let urlEdit = urlSer.urlEdit 
        let id = url.slice(urlEdit.length,url.length) //Récupérer l'id du service à partir de l'url
        this.setState({index: id})
        let api = apiServices() //Objet qui va contenir les routes vers les différentes api service : get, put, post, delete

        axios.get(api.getOneService+id) //Récupérer les données du service à éditer
        .then((response)=>{
            
            this.setState({services:response.data})
         
        })


    
    }
 submitHandler = e => {
        
        e.preventDefault();
        let service = {
            "_id" : this.state.index,
            "title" : this.state.title,
            "description" : this.state.description,
            "level" : this.state.level,
            "icon" : this.state.img
            
        }
        /**Si l'admin n'a pas rempli tout les champs du formulaire 
         * => Les champs vides gardent la valeur initiale du service à editer */

        if (this.state.title ==''){
            service.title = this.state.services.title
        }
        if (this.state.description == ''){
            service.description = this.state.services.description
        }
        if (this.state.level == 0){
            service.level = this.state.services.level
        }
        if (this.state.img == ''){
            service.icon = this.state.services.icon
            this.state.insertImg = 1
        }
        if (this.state.insertImg==1){ //Si la taille de l'image est valide
            
           
    
            let id = this.state.index
            let api = apiServices() //Objet qui va contenir les routes vers les différentes api service : get, put, post, delete
            let urlService = urlServices() //Objet qui va contenir les url des différentes pages du service : edit, manage, add
            axios.put(api.updateService+id,service) 
            .then((response)=>{
                alert('Service updated') //Editer le service
                window.location.href=urlService.urlEdit+id //Rafraichissement du page
            })
            .catch (err => console.log(err))
                  
        }
        else { //Si la taille de l'image est invalide 
            alert("Taille de l'image invalid ! Veuillez réessayer !")
        }
        
    }
    changeHandler = (e) => {
     
         this.setState({ [e.target.name]: e.target.value })
     
     }
    render(){
     
       const {title,description,level,icon} = this.state
      
        return(
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1500, left: 0, bottom: 0}}>
                            <div className="container-fluid">

                   
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Editer service </h1>
                                    
                                </div>
             
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7" >
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les informations du service</h6>
                                               
                                            </div>
                                            
                                            <div className="card mb-3" style={{maxWidth: 540}}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                         <br />
                                                    <img src={this.state.services.icon} className="img-fluid rounded-start" alt="..."  />
                                                    </div>
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title"> <br />Nom :  {this.state.services.title}</h5>
                                                        <p className="card-text text-dark">Description : {this.state.services.description}</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>     
                                    </div>
                                
                                    <div className="col-xl-8 col-lg-7" >
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les informations du service</h6> 
                                               
                                            </div>
                                            
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Titre </label>
                                                    <input type="text" name="title" className="form-control" placeholder="Saisir le titre du service" value={title} onChange={this.changeHandler}/>
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Description</label>
                                                    <input type="textarea" name="description" placeholder="Saisir une description du service" className="form-control" value={description} onChange={this.changeHandler}  />
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Numéro du bloc (1 ou 2)</label>
                                                    <input type="number" name="level" placeholder="Saisir le numéro du bloc" className="form-control" value={level} onChange={this.changeHandler}  />
                                                </div>
                                                <input type="file" name={icon} value={icon} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                                <p className="card-text text-dark">Veuillez ajouter un icon de taille 50px/50px.  </p>
                                               
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