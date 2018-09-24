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
        this.createUser = this.createUser.bind(this);
        
        //Se almacenan valores de email y password en variables de estado 
this.state ={
email:"",
password:"",
name:"",
registryEmail:"",
registryPassword:""


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

createUser(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)
    
    .then(() => {
      
        alert('Your account has been created');
        const nameUser = this.state.name;
        console.log(nameUser);
      })
    
    
    
    .catch((error)=> {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  if (errorCode === 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});

}



loginFacebook(){
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
    const { value, name } = e.target;

   this.setState({
    [name]: value 

  }) 

  

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
            
            <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Signup
        </button>
            
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

{/*Modal*/} 

<div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Create an account</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          

                    <div className="row">
                           
                                  <input type="text" className="form-control registry-btn mr-4 ml-4 mt-2 mb-2" placeholder="Nombre" id="registryName"   name='name'  value={this.state.name} onChange={this.handleChange} /> 
                      
                                   <input type="email" className="form-control registry-btn mr-4  mr-4 ml-4 mt-2 mb-2"   placeholder="Correo" id="registryEmail" name='registryEmail' value={this.state.registryEmail} onChange={this.handleChange}/>
                            
                                   <input type="password" className="form-control registry-btn mr-4 mr-4 ml-4 mt-2 mb-2"  placeholder="Contraseña" id="registryPassword" name='registryPassword' value={this.state.registryPassword} onChange={this.handleChange}/>
                          
                          </div>
    
                    
            
            <div className="modal-footer">
              <button type="button" onClick={this.createUser} className="btn btn-dark" id="Registrar">Send</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              
             
            </div>
          </div>
        </div>
      </div>



    </div>


        
        
        );
        



 
}


}
export default Login;