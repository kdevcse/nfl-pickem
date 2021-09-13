import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from '../styles/LoginModal.module.css'

export default function LoginModal(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={styles.loginControl} controlId='formEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control type='email' placeholder='example@youremail.com'></Form.Control>
            </Form.Group>
            <Form.Group className={styles.loginControl} controlId='formPassword'>
              <Form.Label>Password:</Form.Label>
              <Form.Control type='password' placeholder='Password'></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.handleClose}>Close</Button>
          <Button variant='success' onClick={props.handleLogin}>Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}