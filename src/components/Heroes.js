import React, { Component } from 'react';
import {Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import Navbar from './Navbar';

class Heroes extends Component {


    render() {
        console.log('Heroes', this.props.route.state);
        return (
            <div>
                <Navbar activeKey={2}></Navbar>
                <ListGroup>
                    {
                        this.props.heroes &&
                        this.props.heroes.map(hero =>
                        <ListGroupItem href="#link1"><Label>{hero.id}</Label> {hero.name}</ListGroupItem>)
                    }


                </ListGroup>
                <div>

                </div>

            </div>
        );
    }
}


export default Heroes;

