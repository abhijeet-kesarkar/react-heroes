import  React, {Component} from 'react';
import './Dashboard.css';

import {Jumbotron, Panel, Grid, Row, Col, FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

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
            <Jumbotron>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <Panel>
                                <Grid>
                                    <Row>
                                        <Col xs={8} sm={8} md={8} >
                                            <FormControl type="text" placeholder="Search by name"
                                                         value={this.state.searchQuery}
                                                         onChange={this.changeSearchQuery}/>
                                            {
                                                filteredHeroes &&
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
                                        </Col>
                                        <Col xs={4} sm={4} md={4}>

                                            <Button bsStyle="primary" onClick={this.findHero} ref="target">
                                                Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Grid>
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
            </Jumbotron>
        );
    }
}

export default Dashboard;

