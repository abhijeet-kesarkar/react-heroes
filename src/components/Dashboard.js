import React, { Component } from 'react';
import {Jumbotron, Button } from 'react-bootstrap';
import Navbar from './Navbar';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navbar activeKey={1}></Navbar>
                <Jumbotron>
                    <h1>Dashboard!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
                <Button bsStyle="primary">Primary</Button>
            </div>
        );
    }
}


export default Dashboard;

