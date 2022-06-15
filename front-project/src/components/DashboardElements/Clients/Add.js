
/*Importer les éléments du dashboard*/
import { Component } from 'react'
import { Topbar } from "../Topbar.js"
import { Sidebar } from "../Sidebar.js"

import axios from 'axios'

/**Importer le fichier config api  */
import apiClients from '../Config/configBack/clients.js'

import { Scrollbar } from "react-scrollbars-custom";

export class AddClient extends Component {

    constructor(props) {
        super(props)
        this.state = {
          
                name: '',
                logo: '', // Image 
                image : '', //Image convertée en base 64
                isertImg : 0 //Pour valider la taille de l'image
        }
        this.changeHandler = this.changeHandler.bind(this)
     
      }
    
    changeHandler = (e) => {
     
        this.setState({ [e.target.name]: e.target.value })
    
    }
    uploadImage= async(e)=>{
       if (e.target.files[0].size > 5500){ // Verifier la taille de l'image 
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
                this.setState({image: base64String})
                //Image convertée en base 64
                this.setState({isertImg:1})
                //Changer la valeur isertImg à 1 (true)
            };
            const data = reader.readAsDataURL(file);

       }
      
      }
      
    submitHandler = e => {
        
        e.preventDefault();

      if (this.state.isertImg==1){ //Test sur la variable isertImg 
            
            var client = {}
            client = {
                name : this.state.name,
                logo : this.state.image
            
            }
        //apiClient est un objet qui contient tout les api clients
        let apiClient = apiClients()
        axios.post(apiClient.addClients, client)
            .then(response => {

                alert('Client ajouté')
                //Ajout du client à la bd
                
            })
            .catch(err => {
                alert ("Client n'a pas ajouté ")
            })

        }
        else {
            //isertImg = 0 (false) => Taille de l'image non conforme
            alert("Image non valide! Veuillez réessayer ! ")
        }
        
        
       
    }
  
   
    
    render(){
        const {name,logo,image} = this.state
        return(
            <div>
                <div id="wrapper">
                    <Sidebar active="active" />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1500, left: 0, bottom: 0}}>
                            <div className="container-fluid">
                            
                   
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Ajouter un client</h1>
                                
                                </div>
             
                                <div className="row">

                                
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les coordonnées du client</h6>
                                               
                                            </div>
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Nom </label>
                                                    <input type="text" name="name" className="form-control" placeholder="Saisir le nom du client" value={name} onChange={this.changeHandler} required />
                                                </div>
                                                <label> Logo (400/170) </label><br></br>
                                                <input type="file" name="logo" value={logo} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                               <p className="card-text text-dark">Veuillez ajouter un logo de taille 400px/170px  </p>
                                               
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