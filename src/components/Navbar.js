import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router'


function Navbar(props) {
    function handleSelect(selectedKey) {
        switch(selectedKey){
            case 1: browserHistory.push('/dashboard');
                break;
            case 2: browserHistory.push('/heroes');
                break;
        }
    }

    return (
        <Nav bsStyle="pills" activeKey={props.activeKey} onSelect={handleSelect}>
            <NavItem eventKey={1}>Dashboard</NavItem>
            <NavItem eventKey={2}>Heroes</NavItem>
        </Nav>
    );
}

export default Navbar;

