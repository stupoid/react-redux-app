import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userLoginRequest(this.state);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <Col sm={{ size: 8, push: 2, pull: 2}}>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="loginEmail">Email</Label>
              <Input type="email" name="email" id="loginEmail" placeholder="Enter your email"
                onChange={this.onChange} disabled={this.state.isLoggingIn} />
            </FormGroup>
            <FormGroup>
              <Label for="loginPassword">Password</Label>
              <Input type="password" name="password" id="loginPassword" placeholder="Enter your password"
                onChange={this.onChange} disabled={this.state.isLoggingIn} />
            </FormGroup>
            <Col sm={{ size: 8, push: 2, pull: 2}}>
              <FormGroup>
                <Button block={true}>Login</Button>
              </FormGroup>
            </Col>
          </Form>
        </Col>
      </div>
    );
  }
}

export default LoginForm
