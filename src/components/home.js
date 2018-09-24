import React, { Component } from 'react';
import firebaseApp from '../config/firebase';
//import Login from './components/login';

class Home extends Component { 
 
    constructor (){
        super();
        this.logout = this.logout.bind(this);
    }



    logout(){
        firebaseApp.auth().signOut()
        .then(function() {
            console.log('Saliendo...');
          })
          .catch(function(error) {
            console.log(error);
          });
    }

render(){

return(

    <div className="Login">


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
    <ul className="navbar-nav ">
   
    
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bienvenidx
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" >Perfil</a>
         
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" onClick={this.logout}>Cerrar Sesión</a>
        </div>
 
      </ul>
  </div>
</nav>

    </div>

);

}



}


export default Home;