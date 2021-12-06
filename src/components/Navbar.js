import React from 'react'
import logo1 from "../logo1.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  <a className="navbar-brand" href="#"><img className="logo1" src={logo1} alt="..logo1"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">how work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
      
     
    </ul>
   
  </div>
  </div>
</nav>
      
    )
}

export default Navbar
