import React from "react";
import { Modal, Button } from "react-bootstrap";

const OrderModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Pay $220 using Debit/Credit card.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">Pay</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
