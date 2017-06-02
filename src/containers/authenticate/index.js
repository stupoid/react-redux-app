import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggingIn: false
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isLoggingIn: true})
    // log in to backend
    // recieve token
    // save token
    // https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
    const formData = { email: this.state.email, password: this.state.password }
    console.log(formData);
    // this.setState({isLoggingIn: false})
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Modal isOpen={true}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <Col sm={{ size: 8, push: 2, pull: 2}}>
            <Form onSubmit={this.handleSubmit}>
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
                  <Button block={true} disabled={this.state.isLoggingIn}>Login</Button>
                </FormGroup>
              </Col>
            </Form>
          </Col>
        </ModalBody>
      </Modal>
    );
  }
}

export default Authenticate;
