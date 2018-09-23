import React, { Component } from 'react';
import firebasee from './config/firebase';
import Login from './components/login';
import Home from './components/home';
import './App.css';


class App extends Component {

  constructor(){

    super();
    this.state = {
  user:{},
    }
  }
    
componentDidMount(){

  this.authListener();
}

  authListener(){
/* Por medio de esta función se verifica el estado del usuario para saber si 
existe un registro de este en la base de datos de firebase */
  firebasee.auth().onAuthStateChanged((user) =>{

    console.log(user);

    if (user) {
      // User is signed in.
      this.setState({user});

    } else {
      // No user is signed in.
      this.setState({user: null });

    }
  });
}


  render() {
    return (
      <div className="App">

        
       
          {this.state.user ? (<Home />) :(<Login />)}
     
      </div>
    );
  }
}

export default App;



