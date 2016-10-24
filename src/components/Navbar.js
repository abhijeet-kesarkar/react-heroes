import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';


function Navbar(props) {

    return (
        <Nav bsStyle="pills" activeKey={props.activePage} onSelect={props.onChange}>
            <NavItem eventKey={'dashboard'}>Dashboard</NavItem>
            <NavItem eventKey={'heroes'}>Heroes</NavItem>
        </Nav>
    );
}

export default Navbar;

