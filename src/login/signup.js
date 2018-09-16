import React, { Component } from 'react';
import { Button,  Form ,Row, FormGroup, FormControl, Col} from 'react-bootstrap';

class SignupPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    register(){
		const { email,pass,name } = this.state;
		var acc = JSON.parse(localStorage.getItem('accounts'));
        var newUs = {
            name : name,
            email: email,
            password: pass
        }
        acc.push(newUs);
        localStorage.setItem('accounts',JSON.stringify(acc));
    }
    render() { 
        return (
            <Row>
                <Col sm={4} smOffset={4}>
                    {/*{this.state.alert ? <div className="alert alert-danger alert-dismissible fade in">*/}
                        {/*<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>*/}
                        {/*<strong>Error!</strong> Username Or Password incorrect*/}
                    {/*</div> : <br/>}*/}
                    <Form>
                        <h2>Please Sign Up</h2>
                        <FormGroup>
                            <FormControl
                                type="text"
                                name="text"
                                placeholder="UserName"
                                onChange={this.onChange}
								value={this.state.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="password"
                                name="pass"
                                placeholder="Password"
                                onChange={this.onChange}
                                value={this.state.pass}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button bsStyle="primary" onClick={this.register}>Register</Button>
                        </FormGroup>
                    </Form>
                    <hr/>
                </Col>
            </Row>
        );
    }
}
 
export default SignupPage;