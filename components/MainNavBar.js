import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from '../styles/MainNavBar.module.css';

export default function MainNavBar() {
  return (
  <NavBar bg='primary' variant='dark'>
    <Container>
      <Nav activeKey='#home'>
        <NavBar.Brand className={styles.navBrand} href='#home'>PickEm</NavBar.Brand>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#history'>History</Nav.Link>
      </Nav>
    </Container>
  </NavBar>);
}
