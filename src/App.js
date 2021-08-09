
import './App.css';
import React from 'react';
import image from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/helloworld/src/assests/Neeraj-Chopra.jpg';

class App extends React.Component{
url = "https://en.wikipedia.org/wiki/Neeraj_Chopra"

 constructor(){
   super()
   this.state = {
     title: <div>
            <h2>"Hello I am Practising React Component"</h2>
            "Hello Neeraj Chopra"
     </div>
    }
 }

 shoWebsite =() =>{
   window.open(this.url,"_blank");
 }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={image} alt='neerajchopra' onClick={this.shoWebsite}/>
      </div>
    );
  }
}

export default App;
