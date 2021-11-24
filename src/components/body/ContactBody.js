import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ContactModal from './ContactModal';


function ContactBody() {
    return (
        <>
        <h1 className="head">Contact Body Content</h1>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Give us your thoughts</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <ContactModal />
            
        </Form>
        </>
    )
}

export default ContactBody
