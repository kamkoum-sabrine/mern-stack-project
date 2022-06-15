import { Component } from 'react'
import { Topbar } from "../Topbar.js"

import { Sidebar } from "../Sidebar.js"

import axios from 'axios'

import apiServices from '../Config/configBack/services.js'

import { Scrollbar } from "react-scrollbars-custom";

export class AddService extends Component {

    constructor(props) {
        super(props)
        this.state = {
          
                title: '',
                description: '',
                level : 0, //Numéro du bloc
                img : '', //image convertée en base 64
                image : '',
                icon : '',
                insertImg : 0 //Pour valider la taille de l'image
            
        }
        this.changeHandler = this.changeHandler.bind(this)
      
      }
  
    changeHandler = (e) => {
    
        this.setState({ [e.target.name]: e.target.value })
   
    }
    
      
    submitHandler = e => {
        
        e.preventDefault();

        if (this.state.insertImg==0){ //Si la taille de l'image est invalide
            alert("Taille de l'image invalid ! Veuillez réessayer !")
        }
        else { //Si la taille de l'image est valide
            
            var service = {}
            service = {
                title : this.state.title,
                description : this.state.description,
                level : this.state.level,
                icon : this.state.img
            }
          
           let api = apiServices() //Objet contient les routes vers les api services : get, post, put, delete

           axios.post(api.addServices, service) 
            .then(response => {
 
                alert('Service ajouté avec succés ! ') //L'ajout du service à la bd
               
                
            })
            .catch(err => {
                alert ("Service n'a pas ajouté ")
            })
        
         
        }
      
       
    }

    uploadImage= async(e)=>{ //La conversion de l'image à la base 64
       
        if (e.target.files[0].size>3700){ //Si la taille de l'image est invalide
            alert('Veuillez insérer un icon de taille 50px/50px')
        }
        else {
            const file = e.target.files[0]
            
            const reader = new FileReader();
            reader.onloadend = () => {
            
                let base64String = reader.result
                  .replace("data:", "")
                  .replace(/^.+,/, "");
                  base64String = "data:"+file.type+";base64,"+base64String
                this.setState({img: base64String})
               
            
              
                
                this.setState({insertImg : 1}) //Taille de l'image est valide
              };
             const data = reader.readAsDataURL(file);
        }
        
      
      }

   
    
    render(){
        const {title,description,image,level,icon,img} = this.state
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
                                    <h1 className="h3 mb-0 text-gray-800">Ajouter service</h1>
                                
                                </div>
             
                                <div className="row">

                                
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les informations du service</h6>
                                               
                                            </div>
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Titre </label>
                                                    <input type="text" name="title" className="form-control" placeholder="Saisir le titre du service" value={title} onChange={this.changeHandler} required />
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Description</label>
                                                    <input type="textarea" name="description" placeholder="Saisir une description du service" className="form-control" value={description} onChange={this.changeHandler}/>
                                                </div>
                                                <div className="mb-3">
                                                    <label  className="form-label">Numéro du bloc (1 ou 2) : </label>
                                                    <input type="number" name="level" placeholder="Saisir le numéro du bloc" className="form-control" value={level} onChange={this.changeHandler}/>
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <label  className="form-label">Icon (50px/50px)</label>
                                                   </div>
                                                <input type="file" name={icon} value={icon} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                                 <p className="card-text text-dark">Veuillez ajouter icon de taille 50px/50px.  </p>
                                               
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