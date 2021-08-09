
import './App.css';
import React from 'react';
import image from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/helloworld/src/assests/Neeraj-Chopra.jpg';

class App extends React.Component{
url = "https://en.wikipedia.org/wiki/Neeraj_Chopra"

 constructor(){
   super()
   this.state = {
     title:'Welcome to React JS',
     userName:'',
     nameError: ''
    }
 }

 shoWebsite =() =>{
   window.open(this.url,"_blank");
 }
 onNameChange =(event) =>{
   const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
   this.setState({username:event.target.value})
   if(nameRegex.test(event.target.value)){
     this.setState({nameError:''});
   }else{
     this.setState({nameError:'Name is Incorrect: '})
   }

 }

  render(){
    return(
      <>
      <div>
        <h1>{this.state.title}</h1>
        <h2>HELLO {this.state.username}</h2>
        <img src={image} alt='neerajchopra' onClick={this.shoWebsite}/>
      </div>
      <div class="input">
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </>
    );
  }
}

export default App;
