//import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createBrowserHistory } from 'history'

import './assets/css/templatemo-chain-app-dev.css';

import './assets/css/animated.css';
import './assets/css/style.css';
import './assets/css/fontawesome.css';

import {Home} from './components/Home.js';
import {Login} from './components/login.js';
import {Signup} from './components/signup.js';
import {Dashboard} from './components/Dashboard.js';
import {ManageService} from './components/DashboardElements/Services/Manage.js';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { AddService } from './components/DashboardElements/Services/Add';
import { EditService } from './components/DashboardElements/Services/Edit';

import { ManageTeams } from './components/DashboardElements/Teams/Manage';
import { AddTeam } from './components/DashboardElements/Teams/Add'
import { EditTeam } from './components/DashboardElements/Teams/Edit'
import { ManageClients } from './components/DashboardElements/Clients/Manage'
import { AddClient } from './components/DashboardElements/Clients/Add'
import { EditClient } from './components/DashboardElements/Clients/Edit'

import { ManageNews } from './components/DashboardElements/News/Manage'

import { EditNews } from './components/DashboardElements/News/Edit'
import { AddNews } from './components/DashboardElements/News/Add';
import urlServices from './components/DashboardElements/Config/configFront/services' 
import urlTeams from './components/DashboardElements/Config/configFront/teams' 

function App() {
  AOS.init()
  let urlService = urlServices()
  
  return (
    <div>

      <Router>
       
        <Routes>
           <Route path="/"   element={<Home />} />
           
           <Route path="/login"   element={<Login />} />
           <Route path="/signup"   element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path={urlService.urlManage} element={<ManageService />} />
            <Route path={urlService.urlAdd} element={<AddService />} />
            <Route path="/dashboard/services/edit/:id" element={<EditService />} />
            <Route path="/dashboard/teams/manage" element={<ManageTeams />} />

            <Route path="/dashboard/teams/add" element={<AddTeam />} />
            <Route path="/dashboard/teams/edit/:id" element={<EditTeam />} />

            <Route path="/dashboard/clients/manage" element={<ManageClients />} />
            <Route path="/dashboard/clients/add" element={<AddClient />} />   
            <Route path="/dashboard/clients/edit/:id" element={<EditClient />} />
            <Route path="/dashboard/news/manage" element={<ManageNews />} />  
            <Route path="/dashboard/news/edit/:id" element={<EditNews />} />   
            <Route path="/dashboard/news/add" element={<AddNews /> } />                            
        </Routes>
    
        
       
      </Router>

    

    </div>
  );
}


export default App;
