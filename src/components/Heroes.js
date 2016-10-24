import React, { Component } from 'react';
import {Label, ListGroup, ListGroupItem, Button, Well } from 'react-bootstrap';

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
            <div>
                <ListGroup>
                    {
                        this.props.heroes &&
                        this.props.heroes.map(hero =>
                             <ListGroupItem onClick={e => this.greetUser(hero)}><Label>{hero.id}</Label> {hero.name}</ListGroupItem>)
                    }
                </ListGroup>
                <div>
                    {
                        this.state.selectedHero &&
                            <Well>
                                <p>{this.state.selectedHero.name} is my HERO</p>
                                <Button bsStyle="primary" onClick={this.showDetails}>View Details</Button>
                            </Well>
                    }
                </div>

            </div>
        );
    }
}


export default Heroes;

