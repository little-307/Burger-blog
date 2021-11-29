import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank You for reaching out</h4>
          <p>
            Your email and message has been received. You will hear back pretty soon.
            After all, we are still very small and by we I mean me.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ContactModal () {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          SUBMIT
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default ContactModal;