import React, {Component} from 'react';
import './Dashboard.css';

import {Jumbotron, Panel, Grid, Row, Col} from 'react-bootstrap';

class Dashboard extends Component {

    showDetails = (hero) => {
        this.props.onDetail(hero);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <Row>
                            {
                                this.props.heroes.slice(1, 5).map(hero => {
                                    return (
                                        <Col xs={6} md={4} key={hero.id} >
                                            <Panel className="hero-grid" onClick={ (e) => this.showDetails(hero) }>
                                                {hero.name}
                                            </Panel>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}


export default Dashboard;

