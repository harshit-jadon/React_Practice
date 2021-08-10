import React from 'react';
import './App.css';
import Home from './components/home/home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div classsName="app-main">
        <BrowserRouter>
          <Switch>
            <Route  exact path="">
              <Home/>
            </Route>
          </Switch>
          </BrowserRouter>);
          </div>
    );
  }
}
export default App;