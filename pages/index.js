import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    getData();
  });

  async function getData(){
  }

  return (
    <>
      {
        <div className={styles.homeContainer}>
          <MainNavBar></MainNavBar>
          <Container>
            <h2 className={styles.welcomeTitle}>Welcome to the NFL Pick-em App</h2>
          </Container>
        </div>
      }
    </>
  )
}
