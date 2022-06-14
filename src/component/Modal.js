import React from "react";
import '../css/modal.css';
import {Modal,Button} from "react-bootstrap";

const Modal1 = ({props}) => {
    return(
        <React.Fragment>
        <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          <Button className="close" onClick = {() =>{props(false)}}>
                X
         </Button>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick = {() =>{props(false)}}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog> 
        </React.Fragment>
    )
}

export default Modal1;