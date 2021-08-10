
import 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/helloworld/src/components/home.css';
import React from 'react';
import image from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/helloworld/src/assests/logo.png';

class App extends React.Component{
url = "https://www.bridgelabz.com/"

 constructor(){
   super()
   this.state = {
     title:'Welcome to React JS',
     userName:'',
     nameError: '',
     message:"At Bridgelabz, we are a community of",
     mainMessage:' It has labs in Mumbai and Bangalore. It has partnered with over 500+ companies, including Yatra, Capgemini, Meru Cabs, LafargeHolcim, JDA, UrbanLadder, Fullerton India, and RBL bank. BridgeLabz won Business World Techtor Award 2020 and secured 2nd position at Global Edtech Startup Awards 2019, India. Also, was selected by the Maharashtra state government as Top 100 Startups 2019.'
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
      <div class='app-main'>
      <div class='mainBody'>
        <h1>{this.state.title}</h1>
        <h2>Hello {this.state.username} from Bridgelabz</h2>
        <img src={image} alt='neerajchopra' onClick={this.shoWebsite}/>
      <div class="input">
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
      <h3>{this.state.message}</h3>
      <ul>
        <li>Technologies</li>
        <li>Thinkers</li>
        <li>Builders</li>
      </ul>
      </div>
      <h4>{this.state.mainMessage}</h4>
      <div class='more'>To know about us, visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about our mission</div>
      </div>
      </div>
    );
  }
}

export default App;
