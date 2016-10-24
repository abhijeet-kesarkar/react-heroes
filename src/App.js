import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HEROES_DATA from './components/model/heroes-data';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import HeroDetail from './components/HeroDetail';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pages : ['dashboard'],
            heroes: HEROES_DATA,
            selectedHero:null
        };
    }

    setPage = (page) => {
        this.setState({pages:[page]});
    }

    showDetail = (selectedHero) => {
        let pages = this.state.pages;
        pages.push('detail');
        this.setState({selectedHero, pages});
    }

    back = () => {
        let pages = this.state.pages;
        pages.pop();
        this.setState({pages});
    }

    render() {

        const activePage = this.state.pages[this.state.pages.length -1];
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <h1>Heroes</h1>
            </div>
              <Navbar onChange={this.setPage} activePage={activePage}></Navbar>
              <div className="detail">
                  {
                      activePage === 'dashboard' &&
                          <Dashboard heroes={this.state.heroes} onDetail={this.showDetail}></Dashboard>
                  }
                  {
                      activePage === 'heroes' &&
                          <Heroes heroes={this.state.heroes} onDetail={this.showDetail}></Heroes>
                  }
                  {
                      activePage === 'detail' &&
                          <HeroDetail hero={this.state.selectedHero} onBack={this.back}></HeroDetail>
                  }
              </div>
          </div>
        );
  }
}

export default App;
