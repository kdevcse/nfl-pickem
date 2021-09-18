import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from '../styles/MainNavBar.module.css';
import Button from 'react-bootstrap/Button';
import { supabase } from '../utilities/supabaseConfig';

export default function MainNavBar() {
  const handleLogout = () => {
    supabase.auth.signOut();
  }

  return (
    <NavBar bg='dark' variant='dark'>
      <Container>
        <Nav activeKey='#home'>
          <NavBar.Brand className={styles.navBrand} href='#home'>PickEm</NavBar.Brand>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#history'>History</Nav.Link>
        </Nav>
        <Button variant='dark' onClick={handleLogout}>Logout</Button>
      </Container>
    </NavBar>);
}
