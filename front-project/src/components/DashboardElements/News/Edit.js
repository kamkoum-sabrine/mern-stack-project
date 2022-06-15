import { Component } from 'react'
import { Topbar } from "../Topbar.js"

import { Sidebar } from "../Sidebar.js"

import axios from 'axios'
/**Attention !!! Lors du deploiment du site il faut mettre à jour le fichier urlNews pour changer l'url d'edit */

import urlNews from '../Config/configFront/news'
import apiNews from '../Config/configBack/news'


import { Scrollbar } from "react-scrollbars-custom";


export class EditNews extends Component {

    constructor(props) {
        super(props)

        this.state = {
          
            news : [], //array qui va contenir les données d'un seul actualité
            index : -1, //Variable qui va contenir l'id du news à modifier
          
                title : '',
                image : '',
                description : '',
                img: '', //image convertée en base 64
                insertImg: 0 //Variable pour valider la taille de l'image
      
           
        }
        this.changeHandler = this.changeHandler.bind(this)
      
      
    }
    changeHandler = (e) => {
    
         this.setState({ [e.target.name]: e.target.value })
     
     }

    componentDidMount(){
        //Récuperer l'url du page
        let url = window.location.href

        //urlNew objet qui contient url des pages de news : manage / add / edit 
        let urlNew = urlNews()
        let urlEdit = urlNew.urlEdit
      
            //Récuperer l'id du news à éditer à partir de l'url
            let id = url.slice(urlEdit.length,url.length)

            //Mettre à jour la variable index 
            this.setState({index: id})
          
            //apiNew objet qui contient les routes vers tout les api de news
            let apiNew = apiNews()

            //Récuperer les information d'une seule actualité
            axios.get(apiNew.getOneNews+id)
            .then((response)=>{
   
            this.setState({news:response.data})
        
          
        })


      
    }
    uploadImage= async(e)=>{
        if  ((e.target.files[0].size > 32000) || (e.target.files[0].size<30000)){ //Test sur la taille de l'image
            
            alert ("Veuillez insérer une image de taille 375px/270px") //Taille invalide
           
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
               
                this.setState({insertImg : 1}) //=> Taille de l'image est valide
              
              };
             const data = reader.readAsDataURL(file);
        }
        
      
      }
 submitHandler = e => {
        
        e.preventDefault();
        let news = {
            "_id" : this.state.index,
            "title" : this.state.title,
            "description" : this.state.description,
            "image" : this.state.img
            
        }
       
        //Si l'admin n'a pas rempli tout les champs du formulaires 
        //Ce champ reste le meme et ne change pas
        if (this.state.title ==''){
            news.title = this.state.news.title
        }
        if (this.state.description == ''){
            news.description = this.state.news.description
        }
        if (this.state.img == ''){
            news.image = this.state.news.image
            this.state.insertImg = 1
        }
        if (this.state.insertImg==1){ //Taille de l'image est valide 
            

            let id = this.state.index //id de l'actualité à modifier

            //apiNew objet qui contient les routes vers les api de News
            let apiNew = apiNews()

            //Edier News
            axios.put(apiNew.updateNews+id,news)
            .then((response)=>{
                alert("L'actualité a été mis à jour")

                //url objet qui contient les url de news : manage/add/delete
                let url = urlNews()

                //Rafraichir la page 
                window.location.href=url.urlEdit+id
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
     
       const {title,description,image,img} = this.state
      
        return(
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <Scrollbar style={{ width: 1250, left: 0, bottom: 0}}>
                            <div className="container-fluid">

                   
                                <div className="d-sm-flex align-items-center justify-content-between mb-4" >
                                    <h1 className="h3 mb-0 text-gray-800">Editer actualité </h1>
                                    
                                </div>
             
                                <div className="row">
                                <div className="col-xl-8 col-lg-7" >
                                        <div className="card shadow mb-4">
                                        
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Les informations de l'actualité</h6>
                                               
                                            </div>
                                            
                                            <div className="card mb-3" style={{maxWidth: 540}}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                         <br />
                                                    <img src={this.state.news.image} className="img-fluid rounded-start" alt="..."  />
                                                    </div>
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title"> <br />Titre :  {this.state.news.title}</h5>
                                                        <p className="card-text text-dark">Description : {this.state.news.title}</p>
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
                                                <h6 className="m-0 font-weight-bold text-primary">Les informations</h6>
                                               
                                            </div>
                                            
                                            <div >
                                            <form className="formDashboard " onSubmit={this.submitHandler} style={{paddingLeft:75, paddingTop:25, paddingBottom:25, paddingRight:25}}>
                                                
                                                <div className="mb-2" >
                                                    <label  className="form-label">Titre </label>
                                                    <input type="text" name="title" className="form-control" placeholder="Saisir le titre de l'actualité" value={title} onChange={this.changeHandler} />
                                                </div>
                                                <div className="mb-2" >
                                                    <label  className="form-label">Description <br /> </label>
                                                    <input type="text" name="description" className="form-control" placeholder="Saisir une description" value={description} onChange={this.changeHandler} />
                                                </div> <br />
                                                <div className="mb-2" >
                                                    <label  className="form-label">Image (370/270) </label>
                                                    <input type="file" name={image} value={image} onChange={(e)=>{
                                                        this.uploadImage(e)
                                                    }} />
                                                     <p className="card-text text-dark">Veuillez ajouter une image de taille 370px/270px.  </p>
                                               
                                                </div>
                                               <br /> 
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