import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HEROES_DATA from './components/model/heroes-data';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import HeroDetail from './components/HeroDetail';
import {Row, Col, Grid} from 'react-bootstrap';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pages: ['dashboard'],
            heroes: HEROES_DATA,
            selectedHero: null
        };
    }

    setPage = (page) => {
        this.setState({pages: [page]});
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

    removeHero = (removedHero) => {
        let heroes = this.state.heroes.filter(hero => hero.id != removedHero.id);
        this.setState({heroes});
    }

    addHero = (name) => {
        let heroes = this.state.heroes;
        let id = heroes.length > 0 ? heroes[heroes.length-1].id + 1 : 1;
        heroes.push({id, name});
        this.setState({heroes});
    }

    updateHero = (updatedHero) => {
        let heroes = this.state.heroes.map(hero => hero.id === updatedHero.id? Object.assign(hero, {name: updatedHero.name}) : hero);
        this.setState({heroes});
        this.back();
    }

    render() {

        const activePage = this.state.pages[this.state.pages.length - 1];
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Heroes</h1>
                </header>
                <Grid fluid={true}>
                    <Row>
                        <Col>
                            <Navbar onChange={this.setPage} activePage={activePage}></Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                activePage === 'dashboard' &&
                                <Dashboard heroes={this.state.heroes} onDetail={this.showDetail}></Dashboard>
                            }
                            {
                                activePage === 'heroes' &&
                                <Heroes heroes={this.state.heroes}
                                        onDetail={this.showDetail}
                                        onAdd={this.addHero}
                                        onRemove={this.removeHero}>
                                </Heroes>
                            }
                            {
                                activePage === 'detail' &&
                                <HeroDetail hero={this.state.selectedHero} onBack={this.back} onChange={this.updateHero}></HeroDetail>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
