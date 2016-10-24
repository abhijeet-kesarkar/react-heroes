import React, { Component } from 'react';
import {Jumbotron, Button, Nav, NavItem } from 'react-bootstrap';


class Dashboard extends Component {


    constructor(props) {
        super(props);
    }



    render() {
        const navInstance = (
            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1} href="/dashboard">Dashboard</NavItem>
                <NavItem eventKey={2} href="/heroes">Heroes</NavItem>
            </Nav>
        );
        return (

            <div className="App">

                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
                <Button bsStyle="primary">Primary</Button>
            </div>
        );
    }
}

export default Dashboard;

