import React, {Component} from 'react';
import {
    Label,
    ListGroup,
    ListGroupItem,
    Button,
    Grid,
    Col,
    Row,
    Panel,
    Form,
    FormGroup,
    FormControl,
    Glyphicon
} from 'react-bootstrap';

class Heroes extends Component {


    constructor(props) {
        super(props);
        this.state = {selectedHero: null, addHero: ''};
    }

    greetUser(selectedHero) {
        this.setState({selectedHero});
    }

    changeAddHero = (e) => {
        this.setState({addHero: e.target.value});
    }

    addHero = () => {
        this.props.onAdd(this.state.addHero);
        this.setState({addHero: ''});
    }

    removeHero = (hero, e) => {
        this.props.onRemove(hero);
        e.stopPropagation();
    }

    showDetails = () => {
        this.props.onDetail(this.state.selectedHero);
    }

    render() {
        return (
            <Grid fluid={false}>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Panel>
                            <Form inline>
                                <FormGroup controlId="formInlineName">
                                    <FormControl type="text" placeholder="Name" value={this.state.addHero}
                                                 onChange={this.changeAddHero}/>
                                </FormGroup>
                                {' '}
                                <Button bsStyle="primary" onClick={this.addHero}>
                                    Add Hero
                                </Button>
                            </Form>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <ListGroup>
                            {
                                this.props.heroes &&
                                this.props.heroes.map(hero =>
                                    <ListGroupItem key={hero.id}
                                                   onClick={e => this.greetUser(hero)}>
                                        <Label>{hero.id}</Label><span> {hero.name}</span>
                                        <Button bsStyle="danger" className="pull-right" onClick={e => this.removeHero(hero, e)}>
                                            <Glyphicon glyph="remove"></Glyphicon>
                                        </Button>
                                    </ListGroupItem>
                                )
                            }
                        </ListGroup>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        {
                            this.state.selectedHero &&
                            <Panel>
                                <p>{this.state.selectedHero.name} is my HERO</p>
                                <Button bsStyle="primary" onClick={this.showDetails}>View Details</Button>
                            </Panel>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}


export default Heroes;

