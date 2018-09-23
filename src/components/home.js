import React, { Component } from 'react';
import firebaseApp from '../config/firebase';


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


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
    <ul class="navbar-nav ">
   
    
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item " href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
 
      
  
    </ul>
  </div>
</nav>
          
        










<h1>Hola soy Home</h1>
<button color="info" size="md" onClick={this.logout} >Logout</button>
    </div>

);

}



}


export default Home;