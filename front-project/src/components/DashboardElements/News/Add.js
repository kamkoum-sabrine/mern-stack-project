import { Component } from 'react'
import { Topbar } from "../Topbar.js"

import { Sidebar } from "../Sidebar.js"

import axios from 'axios'
import apiNews from '../Config/configBack/news'

import { Scrollbar } from "react-scrollbars-custom";

export class AddNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
          
                title : '', 
                description : '',
                image : '',
                img :'', //Image convertée en base 64
                insertImg : 0 //Pour valider la taille de l'image
        }
        this.changeHandler = this.changeHandler.bind(this)
        
      }
  
    changeHandler = (e) => {
    
        this.setState({ [e.target.name]: e.target.value })
  
    }
    
      
    submitHandler = e => {
        
        e.preventDefault();

      if (this.state.insertImg==1){ //Si la taille de l'image est valide
        
        var news = {}
        news = {
            title : this.state.title,
            description : this.state.description,
            image : this.state.img
          
        }
       
        //apiNew un objet qui contient tout les api de news
       let apiNew = apiNews()
       axios.post(apiNew.addNews, news)
        .then(response => {
                alert('Actualité ajouté')
           
            
        })
        .catch(err => {
            alert ("Actualité n'a pas ajouté ")
        })
    
      
      }
      else { //Taille de l'image est invalide
            alert("Image non valide! Veuillez réessayer ! ")
      }
        
    
       
    }
    uploadImage= async(e)=>{
        if ((e.target.files[0].size > 32000) || (e.target.files[0].size<30000)){ //Test sur la taille de l'image 
            
            alert ("Veuillez insérer une image de taille 375px/270px")
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
                
                this.setState({insertImg:1}) //Changer la valeur de insertImg à 1 (true) => Taille de l'image est valide
              };
             const data = reader.readAsDataURL(file);
        }
        
      
      }

   
    
    render(){
        const {title,description,image,img} = this.state
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
                                    <h1 className="h3 mb-0 text-gray-800">Ajouter actualités</h1>
                                
                                </div>
             
                                <div className="row">

                                
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les informations</h6>
                                               
                                            </div>
                                            <div >
                                                <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Titre </label>
                                                    <input type="text" name="title" className="form-control" placeholder="Saisir le titre de l'actualité" value={title} onChange={this.changeHandler} required />
                                                </div>
                                                <div className="mb-2" >
                                                    <label  className="form-label">Description </label>
                                                    <input type="text" name="description" className="form-control" placeholder="Saisir une description" value={description} onChange={this.changeHandler} required />
                                                </div>
                                                
                                               <label> Image (370/270) </label><br></br>
                                                <input type="file" name="image" value={image} onChange={(e)=>{
                                                    this.uploadImage(e)
                                                }} />
                                                <p className="card-text text-dark">Veuillez ajouter une image de taille 370px/270px.  </p>
                                               
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