import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from '../styles/MainNavBar.module.css';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal';
import { useState } from 'react';

export default function MainNavBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleClose = () => setShowLoginModal(false);
  const handleOpen = () => setShowLoginModal(true);
  const handleLogin = (email, password) => {
    if (email) console.log('got an email');
    if (password) console.log('got a password');
    setShowLoginModal(false);
  };

  return (
    <NavBar bg='primary' variant='dark'>
      <LoginModal
        show={showLoginModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleLogin={handleLogin}>
      </LoginModal>
      <Container>
        <Nav activeKey='#home'>
          <NavBar.Brand className={styles.navBrand} href='#home'>PickEm</NavBar.Brand>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#history'>History</Nav.Link>
        </Nav>
        <Button onClick={handleOpen}>Login</Button>
      </Container>
    </NavBar>);
}
