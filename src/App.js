
import './App.css';
import React from 'react';
import image from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/helloworld/src/assests/Neeraj-Chopra.jpg';

class App extends React.Component{
url = "https://en.wikipedia.org/wiki/Neeraj_Chopra"

 constructor(){
   super()
   this.state = {
     userName:''
     
    }
 }

 shoWebsite =() =>{
   window.open(this.url,"_blank");
 }
 onNameChange =(event) =>{
   this.setState({username:event.target.value})
 }

  render(){
    return(
      <>
      <div>
      <h1>{this.state.username}</h1>
        <img src={image} alt='neerajchopra' onClick={this.shoWebsite}/>
      </div>
      <div class="input">
        <input onChange={this.onNameChange}/>
      </div>
      </>
    );
  }
}

export default App;
