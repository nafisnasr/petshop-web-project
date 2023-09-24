import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import swal from 'sweetalert'

export default function SignInModal(props) {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const signInHandler = () => {
        console.log("submited");
        setEmailValue("")
        setPasswordValue("")
        swal({
            text: "user signed In",
            icon: "success",
            buttons: "close"
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    complete the form to sign In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="email"
                                value={emailValue}
                                placeholder="email@example.com"
                                onChange={event => setEmailValue(event.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="password"
                                value={passwordValue}
                                placeholder="Password"
                                onChange={event => setPasswordValue(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        signInHandler()
                        props.onHide()
                    }}>Sign In</Button>
            </Modal.Footer>
        </Modal>
    )
}
