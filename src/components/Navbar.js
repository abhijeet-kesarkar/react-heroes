import React, {Component}  from 'react';
import {Nav, NavItem} from 'react-bootstrap';


class Navbar extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.activePage === 'dashboard' || nextProps.activePage === 'heroes');
    }

    render() {
        return (
            <div>
                <Nav bsStyle="pills" activeKey={this.props.activePage} onSelect={this.props.onChange}>
                    <NavItem eventKey={'dashboard'}>Dashboard</NavItem>
                    <NavItem eventKey={'heroes'}>Heroes</NavItem>
                </Nav>
                {' '}
            </div>
        );
    }

}

export default Navbar;

