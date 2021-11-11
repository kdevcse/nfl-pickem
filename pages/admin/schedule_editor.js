import Container from 'react-bootstrap/Container';
import styles from '../../styles/Admin.module.css';
import AdminNavBar from '../../components/AdminNavBar';
import { firestore } from '../../utilities/firebaseConfig';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
export default function ScheduleEditor() {
    
  useEffect(() => {
    getData();
  });
  
  async function getData() {
    const docRef = doc(firestore, 'info', 'FO8bmteLTRQ1wU1pqEGs');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      console.log('data not found');
    }
}

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