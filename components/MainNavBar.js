import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from '../styles/MainNavBar.module.css';
import Button from 'react-bootstrap/Button';
import { supabase } from '../utilities/supabaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootballBall, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function MainNavBar() {
  const handleLogout = () => {
    supabase.auth.signOut();
  }

  return (
    <NavBar bg='dark' variant='dark'>
      <Container>
        <Nav activeKey='#home'>
          <NavBar.Brand className={styles.navBrand} href='#home'>
            <FontAwesomeIcon icon={faFootballBall} size='lg'/>
          </NavBar.Brand>
          <Nav.Link href='#MyLeagues'>My Leagues</Nav.Link>
        </Nav>
        <Button title='Sign Out' variant='dark' onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
        </Button>
      </Container>
    </NavBar>);
}
