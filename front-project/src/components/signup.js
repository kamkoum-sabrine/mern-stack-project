import React,{ Component } from "react";
import './style.css';
import logo from '../assets/images/logo-xd-meta.png';
import axios from 'axios'

export class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    signupHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }
    submitHandler = e => {
        e.preventDefault()
    
        axios.post('http://localhost:8080/api/auth/signup', this.state)
            .then(response => {
                console.log(response.status.error)
                console.log(response.status)
                if (response.status == 401){
                    alert ('Utilisateur non trouve ')
                }
                else {
                   
                    alert('Utilisateur créé')
                }
            })
            .catch(err => {
                alert ('Utilisateur non créé ')
            })
    }
    render() {
        const {email, password} = this.state
        return (
            <div id="login" className=""> <br />
                <div className="overlay" >
       
            <form class="login" onSubmit={this.submitHandler}>
               
                <div className="con">
                
                <header className="head-form">
               
                <img src={logo} alt="XD-META"  width="70" height="150" />
            
                    <h2 className="titreLog">Sign up</h2>
               
                    <p>Create an admin page here using your username and password</p>
                </header>
                <br/>
                <div className="field-set">
                    
                   
                        <span className="input-item">
                        <i className="fa fa-user-circle"></i>
                        </span>
                    
                        <input className="form-input" id="txt-input" type="text" name="email" value={email} placeholder="@UserName" onChange={this.changeHandler} required />
                    
                    <br />
                    
                       
                    
                    <span className="input-item">
                    <i className="fa fa-key"></i>
                    </span>
                   
                    <input className="form-input" type="password" placeholder="Password" id="pwd" value={password} name="password" onChange={this.changeHandler} required />
                    
           
                    <span>
                    <i className="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
                    </span>
                    
                    
                    <br />
                    <br /><br />
                    <button className="log-in" style={{fontSize: 30}} type="submit" > Sign Up </button>
                </div>
                
            
                
                    
           
                </div>
                
              
            </form>
       </div>
       <script src="main.js"></script>
            </div>
        )
    }
}