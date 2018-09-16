import React, { Component } from 'react';
import { Button, Form , Row, FormGroup, FormControl, Col} from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    login(){
		// {this.state.email} --- {this.state.pass}
		const { email,pass, } = this.state;
        const { login } = this.props;
		var a = JSON.parse(localStorage.getItem('accounts'));
		console.log(a);
		a.map(res => {
			if(email == res.email && pass == res.password){
				var user = res;
				localStorage.setItem('currentUser',JSON.stringify(user));
				localStorage.setItem("quizAppLogin","yes");
				login();

			}
			else{
				console.log('naaa');
			}
		})
        
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
                        <h2>Please Sign in</h2>
                        <FormGroup>
                            <FormControl
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={e => this.onChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="password"
                                name="pass"
                                placeholder="Password"
                                value={this.state.pass}
                                onChange={e => this.onChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button bsStyle="primary" onClick={this.login}>Login</Button>
                            {/*<a href="javascript:void(0)" onClick={this.showRegister}>Register?</a>*/}
                        </FormGroup>
                    </Form>
                    <hr/>
                </Col>
            </Row>
        );
    }
}
 
export default LoginPage;