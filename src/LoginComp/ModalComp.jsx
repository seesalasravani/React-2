import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AuthenticationModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         FORM-MODAL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>USER INFORMATION</h4>
        <p> {props.user}</p>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}