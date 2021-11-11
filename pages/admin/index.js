import Container from 'react-bootstrap/Container';
import styles from '../../styles/Admin.module.css';
import AdminNavBar from '../../components/AdminNavBar';

export default function Admin() {

  return(
    <>
      <div className={styles.adminContainer}>
        <AdminNavBar></AdminNavBar>
        <Container>
          
        </Container>
      </div>
    </>
  ); 
}