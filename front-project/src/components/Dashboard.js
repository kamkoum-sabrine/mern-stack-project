import { Component } from "react"
import { Sidebar } from "./DashboardElements/Sidebar.js"

import { Topbar } from "./DashboardElements/Topbar.js"
import { Container } from "./DashboardElements/Container.js"

import './DashboardElements/vendor/fontawesome-free/css/all.min.css'
import './DashboardElements/css/sb-admin-2.min.css'
import './DashboardElements/vendor/jquery/jquery.min.js'
import './DashboardElements/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './DashboardElements/vendor/jquery-easing/jquery.easing.min.js'


export class Dashboard extends Component{
    render(){
        return(
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column" >
                        <div id="content">
                            <Topbar />
                            <Container />   
                        </div>
                    </div>
                </div>      
            </div>
              
        )
    }
   
}