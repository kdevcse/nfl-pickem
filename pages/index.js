import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsyNRciCC4HXqe2hDghDnH9t_QfDdR8YQ",
  authDomain: "nfl-pickem-8ffaa.firebaseapp.com",
  projectId: "nfl-pickem-8ffaa",
  storageBucket: "nfl-pickem-8ffaa.appspot.com",
  messagingSenderId: "577389488854",
  appId: "1:577389488854:web:0eb368ef23e30f30d03777"
};

try {
  initializeApp(firebaseConfig);
} catch (error) {
  console.log('Firebase admin initialization error', error.stack);
}

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
