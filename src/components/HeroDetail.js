import React, {Component} from 'react';
import {Jumbotron, Button, Form, FormGroup, Col, FormControl, ControlLabel, ButtonToolbar} from 'react-bootstrap';


class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = {hero: Object.assign({},props.hero)};
    }

    save = () =>{
        this.props.onChange(this.state.hero);
    }

    change = (e) => {
        let hero = this.state.hero;
        hero.name = e.target.value;
        this.setState({hero});
    }

    render() {
        const form = (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Id
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Id" value={this.state.hero.id} readOnly/>

                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Name" value={this.state.hero.name} onChange={this.change}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <ButtonToolbar>
                            <Button bsStyle="danger" onClick={this.save}>
                                Save
                            </Button>
                            <Button bsStyle="primary" onClick={this.props.onBack}>Back</Button>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        );

        return (

            <div>

                <Jumbotron>
                    <h1>{this.props.hero.name}</h1>
                    {form}
                </Jumbotron>
            </div>
        );
    }
}

export default Dashboard;

