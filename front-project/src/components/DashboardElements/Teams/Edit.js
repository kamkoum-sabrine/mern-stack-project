import { Component } from 'react'
import { Topbar } from "../Topbar.js"
import { Sidebar } from "../Sidebar.js"

import axios from 'axios'

/**Attention !!! Lors du deploiment du site il faut mettre à jour le fichier urlTeams pour changer l'url d'edit */
import urlTeams from '../Config/configFront/teams.js'
import apiTeams from '../Config/configBack/teams'


import { Scrollbar } from "react-scrollbars-custom";


export class EditTeam extends Component {

    constructor(props) {
        super(props)

        this.state = {
          
            team : [],
            index : -1,  //Variable qui va contenir l'id de team à modifier
          
                name : '',
                job : '',
                linkedinUrl : '',
                facebookUrl : '',
                image : '',
                img : '', //image convertée en base 64
                insertImg: 0 //Pour valider la taille de l'image
      
           
        }
        this.changeHandler = this.changeHandler.bind(this)
      
      
    }
    changeHandler = (e) => {
     
         this.setState({ [e.target.name]: e.target.value })
        
     }

    componentDidMount(){
        let url = window.location.href //Récupérer l'url de la page edit
        let teamUrl = urlTeams() //Objet contient les url des pages teams : edit,manage, add
        
        let urlEdit = teamUrl.urlEdit //Récupérer l'url de la page edi :http://localhost:3000/dashboard/teams/edit/
         
        let id = url.slice(urlEdit.length,url.length) //Récupérer l'id du team à éditer à partir de l'url de la page
          
        this.setState({index: id}) 
        let apiTeam = apiTeams() //Objet qui contient les roues des api teams : get, post, put, delete
        
        axios.get(apiTeam.getOneTeam+id) //Récupérer les informations du team à éditer
        .then((response)=>{
           
            this.setState({team:response.data})
          
          
        })


     
    }
 submitHandler = e => {
        
        e.preventDefault();
        let team = {
            "_id" : this.state._id,
            "name" : this.state.name,
            "job" : this.state.job,
            "facebookUrl" : this.state.facebookUrl,
            "linkedinUrl" : this.state.linkedinUrl,
            "image" : this.state.img
            
        } 
        /**Si l'admin n'a pas rempli tout les champs du formulaire
         *  => Les champs vides gardent la valeur initiale du team à editer */
        if (this.state.name ==''){
            team.name = this.state.team.name
        }
        if (this.state.job == ''){
            team.job = this.state.team.job
        }
        if (this.state.facebookUrl == ''){
            team.facebookUrl = this.state.team.facebookUrl
        }
        if (this.state.img == ''){
            team.image = this.state.team.image
            this.state.insertImg = 1
        }
        if (this.state.insertImg ==0){ //Si la taille de l'image est invalide
            alert("Taille de l'image invalide ! Veuillez réessayer !")
        }
        else { // Taille de l'image est valide
            
            
    
            let id = this.state.index 
            let apiTeam = apiTeams()
            axios.put(apiTeam.updateTeam+id,team) //Editer le team 
            .then((response)=>{
               
                let url = urlTeams()
                window.location.href = url.urlEdit+id //Rafraichir la page edit
            })
            .catch (err => console.log(err))
        }
       
              
    }
    changeHandler = (e) => {
     
         this.setState({ [e.target.name]: e.target.value })
     
     }
     uploadImage= async(e)=>{
        
        if (e.target.files[0].size>35000){ //Test sur la taille de l'image
        
        const file = e.target.files[0]
       
        const reader = new FileReader();
        reader.onloadend = () => {
            // use a regex to remove data url part
            let base64String = reader.result
              .replace("data:", "")
              .replace(/^.+,/, "");
              base64String = "data:image/png;base64,"+base64String
            this.setState({img: base64String})
           
            this.setState({insertImg: 1}) //Taille de l'image est valide
          
          };
         const data = reader.readAsDataURL(file);
        }
        else { //Taille de l'image non conforme
            alert("Veuillez insérer une image de taille 600px/600px")
        }
        
      }

    render(){
     
       const {name,job,facebookUrl,linkedinUrl,image,img} = this.state
      
        return(
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1500, left: 0, bottom: 0}}>
                            <div className="container-fluid">

                   
                                <div className="d-sm-flex align-items-center justify-content-between mb-4" >
                                    <h1 className="h3 mb-0 text-gray-800">Editer équipe </h1>
                                    
                                </div>
             
                                <div className="row">
                                <div className="col-xl-8 col-lg-7" >
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les coordonnées d'un client</h6>
                                               
                                            </div>
                                            
                                            <div className="card mb-3" style={{maxWidth: 540, paddingLeft:20}} >
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                         <br />
                                                    <img src={this.state.team.image} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title"> <br />Nom :  {this.state.team.name}</h5>
                                                        <p className="card-text text-dark">Emploi : {this.state.team.job}</p>
                                                        <p className="card-text text-dark">Lien Facebook : {this.state.team.facebookUrl}</p>
                                                        <p className="card-text text-dark">Lien Linkedin : {this.state.team.linkedinUrl}</p>
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
                                                <h6 className="m-0 font-weight-bold text-primary">Les coordonnées du membre</h6>
                                               
                                            </div>
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Nom </label>
                                                    <input type="text" name="name" className="form-control" placeholder="Saisir le nom" value={name} onChange={this.changeHandler}/>
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Poste</label>
                                                    <input type="textarea" name="job" placeholder="Saisir le poste" className="form-control" value={job} onChange={this.changeHandler}  />
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Lien facebook</label>
                                                    <input type="text" name="facebookUrl" placeholder="Saisir le lien facebook" className="form-control" value={facebookUrl} onChange={this.changeHandler}  />
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Lien linkedin</label>
                                                    <input type="text" name="linkedinUrl" placeholder="Saisir le lien linkedin" className="form-control" value={linkedinUrl} onChange={this.changeHandler}  />
                                                </div>
                                                <input type="file" name={image} value={image} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                              
                                                <p className="card-text text-dark">Veuillez ajouter une image de taille 600px/600px  </p>
                                                <br /><br />
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