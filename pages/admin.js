import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Admin.module.css';

export default function Admin() {
  return(
    <>
      <div className={styles.adminContainer}>
        <MainNavBar></MainNavBar>
        <Container>
        </Container>
      </div>
    </>
  ); 
}