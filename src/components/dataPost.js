import React, { Component } from 'react';
import firebase from 'firebase';
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
const db = firebase.firestore();

 class Postdata extends Component{ 


    constructor(){
        super();

        this.state = ({
            name:"",
            post:"",
            photo:""
          }) 



    }

    componentDidMount(){
 
        db.collection("users").get().then((querySnapshot) => {
           querySnapshot.forEach((doc) => {
               console.log(`${doc.id} => ${doc.data()}`);
       
               const {name,photo,post } = doc.data();
             this.setState({
                 
               name,
               post,
               photo
       
       
           });
     
           });
       
       
       
       
       });
    }

render(){

return(  



<div>{this.state.name}</div>);

}


}



export default Postdata;


