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
    const infoRef = doc(firestore, 'info', 'FO8bmteLTRQ1wU1pqEGs');
    const infoSnap = await getDoc(infoRef);

    if (infoSnap.exists()) {
      
      console.log(infoSnap.data());
    } else {
      console.log('Info data not found');
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