
import AOS from 'aos';
import 'aos/dist/aos.css';

import {Navbar} from './Navbar.js';
import {Acceuil} from './Acceuil.js';
import {Service} from './Service.js';

import {Contact} from './Contact.js';
import {Demo} from './Demo.js';
import {Clients} from './Clients.js';
import {News} from './News.js';
import {Service2} from './service2.js';
import {Team} from './Team.js';
import {Tuto} from './Tuto.js';
import {Price} from './Price.js';


export function  Home() {

  return (
    <div>
     
      <Navbar />
      <Acceuil />
      <Service />
      <Demo />
      <News />
      <Clients />
      <Team />
      <Service2 />
      <Tuto />
      <Price />
      <Contact />

    </div>
  );
}



