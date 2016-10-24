import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HEROES_DATA from './components/model/heroes-data';

class App extends Component {


    render() {
        let heroesData = HEROES_DATA;

        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <h1>Heroes</h1>
            </div>
              <div className="detail">
                  {this.props.children}
              </div>
          </div>
        );
  }
}

export default App;
