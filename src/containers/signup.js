import React, { useState, useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Signup = () => {
// export function Signup() {
    const mapState = useCallback(
        state => ({
          // canDelete: state.todos[index].canDelete,
          // name: state.todos[index].name,
          username: state.user.username,
          email: state.user.email,
          password: state.user.password,
          passwordConfirmation: state.user.passwordConfirmation,
          zipcode: state.user.zipcode,
        }),
        [username, email, password, passwordConfirmation, zipcode],
    );

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [zipcode, setZipcode] = useState('');

    return (
        <Container className="h-100">
            <Row className="d-flex justify-content-center w-100 h-100 align-items-center">
              <Col md={{ span: 8 }}>
                {/* <Form onSubmit={this.handleOnSubmit} className="signup"> */}
                <Form className="signup">
                <h1>Get started with Droplet!</h1>
                {/* <ul>{this.handleErrors()}</ul> */}
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        {/* <Form.Control type="username" placeholder="Enter username" name="username" value={username} onChange={this.handleOnChange.bind(this)} /> */}
                        <Form.Control type="username" placeholder="Enter username" name="username" value={username} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {/* <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleOnChange.bind(this)} /> */}
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        {/* <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleOnChange} /> */}
                        <Form.Control type="password" placeholder="Password" name="password" value={password} />
                    </Form.Group>

                    <Form.Group controlId="formPasswordConfirmation">
                        <Form.Label>Password Confirmation</Form.Label>
                        {/* <Form.Control type="password" placeholder="Password" name="password_confirmation" value={passwordConfirmation} onChange={this.handleOnChange} /> */}
                        <Form.Control type="password" placeholder="Password" name="password_confirmation" value={passwordConfirmation} />
                    </Form.Group>

                  <Button variant="primary" type="submit">Submit</Button>

                  <p><Link to='/login'>Log In</Link></p>
    
                </Form>
              </Col>
            </Row>
        </Container>
    )
}