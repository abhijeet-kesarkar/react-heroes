import  React, {Component} from 'react';
import './Dashboard.css';

import {Panel, Grid, Row, Col, FormControl, ListGroup, ListGroupItem} from 'react-bootstrap';

class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = {searchQuery: ''}
    }

    showDetails = (hero) => {
        this.props.onDetail(hero);
    }

    findHero = () => {

    }

    changeSearchQuery = (e) => {
        this.setState({searchQuery: e.target.value})
    }

    render() {

        const filteredHeroes = this.state.searchQuery ? this.props.heroes.filter(hero => hero.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1) : null;

        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Panel>
                            <FormControl type="text" placeholder="Search by name"
                                         value={this.state.searchQuery}
                                         onChange={this.changeSearchQuery}/>
                            {
                                filteredHeroes && filteredHeroes.length > 0 &&
                                <ListGroup>
                                    {
                                        filteredHeroes.map(hero =>
                                            <ListGroupItem key={hero.id} onClick={(e) => this.showDetails(hero)}>
                                                <span> {hero.name}</span>
                                            </ListGroupItem>
                                        )
                                    }
                                </ListGroup>
                            }
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.heroes.slice(1, 5).map(hero => {
                            return (
                                <Col xs={6} sm={3} md={3} key={hero.id}>
                                    <div className="hero-grid"
                                         onClick={ (e) => this.showDetails(hero) }>
                                        <h2>{hero.name}</h2>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Grid>
        );
    }
}

export default Dashboard;

