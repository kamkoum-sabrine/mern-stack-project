import React,{ Component } from "react";
import './style.css';
import logo from '../assets/images/logo-xd-meta.png';
import axios from 'axios'


export class Login extends Component {

    constructor(props) {
        
        super(props);
    
        this.state = {
            email: '',
            password: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = () => {
       
       this.props.navigate.push('/signup')
    }
    submitHandler = e => {
        e.preventDefault()
     
        axios.post('http://localhost:8080/api/auth/login', this.state)
            .then(response => {
                     alert('Ok')
                    window.location.replace("/dashboard");
                
                
            })
            .catch(err => {
                alert ('Utilisateur non trouve ')
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
            
                    <h2 className="titreLog">Log In</h2>
               
                    <p>login here using your username and password</p>
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
                    <button className="log-in" style={{fontSize: 30}} type="submit" > Log In </button>
                </div>
                
            
                <div class="other">
      
                    <button className="btn submits frgt-pass">Forgot Password</button>
     
                    <button className="btn submits sign-up" ><a href="/signup">Sign Up </a>
         
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </button>
          
                </div>
                    
           
                </div>
                
              
            </form>
       </div>
       <script src="main.js"></script>
            </div>
        )
    }
}
/*export function Login () {

    componentDidMount=>(){
        super(props);
        this.props.history = useNavigate();
        this.state = {
            email: '',
            password: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    constructor(props) {
        
        super(props);
        this.props.history = useNavigate();
        this.state = {
            email: '',
            password: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = () => {
        console.log(this)
       this.props.navigate.push('/signup')
    }
    submitHandler = e => {
        e.preventDefault()
      //  console.log(this.state)
        axios.post('http://localhost:8080/api/auth/login', this.state)
            .then(response => {
                console.log(response.status.error)
                console.log(response.status)
                if (response.status == 401){
                    alert ('Utilisateur non trouve ')
                }
                else {
                   // console.log(response.status)
                    alert('Ok')
                }
            })
            .catch(err => {
                alert ('Utilisateur non trouve ')
            })
    }
    render() {
        const {email, password} = this.state
        return (
            <div id="login" className=""> <br />
                <div className="overlay" >
       
            <form onSubmit={this.submitHandler}>
               
                <div className="con">
                
                <header className="head-form">
               
                <img src={logo} alt="XD-META"  width="70" height="150" />
            
                    <h2 className="titreLog">Log In</h2>
               
                    <p>login here using your username and password</p>
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
                    <button className="log-in" style={{fontSize: 30}} type="submit" > Log In </button>
                </div>
                
            
                <div class="other">
      
                    <button className="btn submits frgt-pass">Forgot Password</button>
     
                    <button className="btn submits sign-up" onClick={this.handleClick}>Sign Up 
         
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </button>
          
                </div>
                    
           
                </div>
                
              
            </form>
       </div>
       <script src="main.js"></script>
            </div>
        )
    }
}*/