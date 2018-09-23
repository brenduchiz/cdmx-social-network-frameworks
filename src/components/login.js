import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseApp from '../config/firebase';

//Creating a class 

class Login extends Component { 
 
    constructor (){
        super();
        
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);

        //Se almacenan valores de email y password en variables de estado 
this.state ={
email:"",
password:""

}
    }

// Ingresa el usuario
/* Cuando el usuario ya ha hecho su registro anteriormente solo debe ingresar su
correo y contraseña */

login(e){
e.preventDefault();
firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
}).catch((error)=>{
    
console.log(error);
});    

}


loginFacebook(e){
    const provider = new firebase.auth.FacebookAuthProvider();

    firebaseApp.auth().signInWithPopup(provider)
    .then()
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));

}


loginGoogle(){

const provider = new firebase.auth.GoogleAuthProvider();
  firebaseApp.auth().signInWithPopup(provider)
  .then()
  .then(result => console.log(`${result.user.email} ha iniciado sesión`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}






handleChange(e){
    this.setState({ [e.target.name]: e.target.value});

}

render() {


    return (
        <div className="Login">
        <div className="row mt-5">
            <div className="col">
              
            </div>
            <div className="col">
            <input 
            value={this.state.email}
            onChange={this.handleChange}
                type="email"
                name='email'
                className="form-control" 
                placeholder="Email"
                id="inputEmail"
                />
            </div>
            <div className="col">
             
            </div>
          </div>
        
        <div className="row mt-4 mb-4">
            <div className="col">
              
            </div>
            <div className="col">
            <input  
            value={this.state.password}
            onChange={this.handleChange}
                type="password"
                name='password'
                className="form-control" 
                placeholder="Password"
                id="inputPassword"
                />
            </div>
            <div className="col">
             
            </div>
          </div>
        
       
 {/*  Botones Login y Signup*/} 
        <div className="row ">
            <div className="col">
              
            </div>
            <div className="col">
            <button type="submit" onClick={this.login}  className="btn btn-primary mr-2" >Login</button>
            <button onClick={this.signup}  className="btn btn-primary" >Signup</button>
            </div>
            <div className="col">
             
            </div>
          </div>


 {/*  Botones Google y Facebook*/}

<div className="row ">
            <div className="col">
              
            </div>
            <div className="col">
            <button type="submit" onClick={this.loginFacebook}  className="btn btn-primary mr-2 mt-2" >Login Facebook</button>
            <button onClick={this.loginGoogle}  className="btn btn-danger mt-2" >Login Google</button>
            
            </div>
            <div className="col">
             
            </div>
          </div>




          </div>
        
        
        );
        



 
}


}
export default Login;