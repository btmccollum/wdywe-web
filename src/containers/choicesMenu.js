import React from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Checkbox } from '../components/checkbox';

export const ChoicesMenu = () => {

    return (
        <Container className="choicesBox">
            <Row>
                <Col>
                    <p>Hi there</p>
                    <label>
                        <span>Mexican </span><Checkbox />
                    </label>

                    <label>
                        <span>Thai </span><Checkbox />
                    </label>

                    <label>
                        <span>Italian </span><Checkbox />
                    </label>
                </Col>
            </Row>
        </Container>
    )
}