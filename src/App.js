
import './App.css';
import React from 'react';
import logo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/helloworld/src/assests/Neeraj-Chopra.jpg';

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
       <img src={logo} alt='neerajchopra'/>
    </div>
   
  );
}
}

export default App;
