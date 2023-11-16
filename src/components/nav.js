import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

class Navbar extends Component{
  render(){
    return (
    
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/add'} className="nav-link active" aria-current="page">Add</Link>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>

      
    
  );
}
};

export default Navbar;