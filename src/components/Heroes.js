import React, { Component } from 'react';
import {Label, ListGroup, ListGroupItem, Button, Well, Grid, Col, Row } from 'react-bootstrap';

class Heroes extends Component {


    constructor(props) {
        super(props);
        this.state = {selectedHero:null};
    }

    greetUser(selectedHero) {
        this.setState({selectedHero});
    }

    showDetails = () => {
        this.props.onDetail(this.state.selectedHero);
    }

    render() {
        return (
            <Grid fluid={false}>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <ListGroup>
                            {
                                this.props.heroes &&
                                this.props.heroes.map(hero =>
                                    <ListGroupItem key={hero.id} onClick={e => this.greetUser(hero)}><Label>{hero.id}</Label> {hero.name}</ListGroupItem>)
                            }
                        </ListGroup>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        {
                            this.state.selectedHero &&
                            <Well>
                                <p>{this.state.selectedHero.name} is my HERO</p>
                                <Button bsStyle="primary" onClick={this.showDetails}>View Details</Button>
                            </Well>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}


export default Heroes;

