import { Component } from 'react'
import { Topbar } from "../Topbar.js"
import { Sidebar } from "../Sidebar.js"

import axios from 'axios'

import apiTeams from '../Config/configBack/teams'

import { Scrollbar } from "react-scrollbars-custom";

export class AddTeam extends Component {

    constructor(props) {
        super(props)
        this.state = {
          
                name : '',
                job : '',
                linkedinUrl : '',
                facebookUrl : '',
                image : '',
                img : '', //image convertée en base 64
                src:'',
                insertImg: 0 //Variable pour valider la taille de l'image
            
        }
        this.changeHandler = this.changeHandler.bind(this)
       
      }
    
    changeHandler = (e) => {
     
        this.setState({ [e.target.name]: e.target.value })
     
    }
    
      
    submitHandler = e => {
        
        e.preventDefault();
        if (this.state.insertImg==0){ //Image non valide (de taille non conforme)
            alert("Taille de l'image invalid ! Veuillez réessayer !")
        }
        else {
            
            var team = {}
            team = {
                name : this.state.name,
                job : this.state.job,
                linkedinUrl : this.state.linkedinUrl,
                facebookUrl : this.state.facebookUrl,
                image : this.state.img
          
            }
            //apiTeam objet qui contient les routes vers tous les api de teams
            let apiTeam = apiTeams()
           
            axios.post(apiTeam.addTeams, team)
                    .then(response => {
                      
                      
                            alert("Un membre de l'équipe a été ajouté")
                     
                        
                    })
                    .catch(err => {
                        alert ("Team n'est pas ajouté ")
                    })
         
            
            
          
        }
       
        
      
        
       
    }
  uploadImage= async(e)=>{ //Convertir l'image en base 64
      if (e.target.files[0].size>35000){ //Tes sur la taille de l'image

       
        const file = e.target.files[0]
       
        const reader = new FileReader();
        reader.onloadend = () => {
          
            let base64String = reader.result
              .replace("data:", "")
              .replace(/^.+,/, "");
              base64String = "data:image/png;base64,"+base64String
            this.setState({img: base64String})
           
            this.setState({insertImg: 1}) //Image valide
          };
         const data = reader.readAsDataURL(file);
      }
      else { //Taille de l'image non valide
        alert("Veuillez insérer une image de taille 600px/600px")
      }
    
    
  }

   
    
    render(){
        const {name,job,facebookUrl,linkedinUrl,image,img,src} = this.state
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
                                    <h1 className="h3 mb-0 text-gray-800">Ajouter une membre d'équipe</h1>
                                
                                </div>
             
                                <div className="row">

                                
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les coordonnées du membre</h6>
                                               
                                            </div>
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Nom </label>
                                                    <input type="text" name="name" className="form-control" placeholder="Saisir le nom" value={name} onChange={this.changeHandler} required />
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Poste</label>
                                                    <input type="textarea" name="job" placeholder="Saisir le poste" className="form-control" value={job} onChange={this.changeHandler}/>
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Lien Facebook</label>
                                                    <input type="text" name="facebookUrl" placeholder="Saisir le lien facebook" className="form-control" value={facebookUrl} onChange={this.changeHandler}/>
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Lien linkedin</label>
                                                    <input type="text" name="linkedinUrl" placeholder="Saisir le lien linkedin" className="form-control" value={linkedinUrl} onChange={this.changeHandler}/>
                                                </div>

                                              

                                                <div className="mb-3">
                                                    <label  className="form-label">Image (600/600)</label>
                                                   </div>
                                                <input type="file" name="image" value={image} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                               
                                                    <p className="card-text text-dark">Veuillez ajouter une image de taille 600px/600px  </p>
                                                <button type="submit" className="btn btn-primary" >Ajouter</button>
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