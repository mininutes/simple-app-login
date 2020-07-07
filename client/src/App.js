import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Login from './components/auth/Login';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact
            path={"/"}
            render={props => (
              <Login
                {...props}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}