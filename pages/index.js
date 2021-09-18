import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function Home() {
  async function getData(){
    let querySnapshot = await getDocs(collection(getFirestore(), 'info'));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  return (
    <>
      <MainNavBar></MainNavBar>
      <Container>
        <h2 className={styles.welcomeTitle}>Welcome to the NFL Pick-em App</h2>
        <button onClick={getData}>Get Data</button>
      </Container>
    </>
  )
}
