import React from 'react'
import {Modal, Button} from 'react-bootstrap';

const ModalDialog = () => {

    const [isShow, invokeModal] = React.useState(false);
    const closeModal = () => invokeModal(false);
    const showModal = () => invokeModal(true);

    const initModal = () => {
    return invokeModal(!false)
    }
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog;