import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
 constructor(){
   super()
   this.state = {
     title: <div>
            <h2>"Hello I am Practising React Component"</h2>
            "Hello Harshit"
     </div>
   }
 }
 render(){
  return(
    <div>
       <h1>{this.state.title}</h1>
    </div>
   
  );
}
}

export default App;
