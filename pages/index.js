import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../utilities/firebaseConfig';


export default function Home() {

  useEffect(() => {
    getData();
  });

  async function getData() {
    const docRef = doc(firestore, 'schedule', 'hi2cZUU82QGq7YRlR7VR');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      console.log('data not found');
    }
  }

  return (
    <>
      <div className={styles.homeContainer}>
        <MainNavBar></MainNavBar>
        <Container>
          <h2 className={styles.welcomeTitle}>Welcome to the NFL Pick-em App</h2>
        </Container>
      </div>
    </>
  )
}
