import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <MainNavBar></MainNavBar>
      <Container>
        <h2 className={styles.welcomeTitle}>Welcome to the NFL Pick-em App</h2>
      </Container>
    </>
  )
}
