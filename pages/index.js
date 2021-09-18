import MainNavBar from '../components/MainNavBar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from '../utilities/supabaseConfig';
import { Auth } from '@supabase/ui';
import { useEffect } from 'react';


export default function Home() {
  const { user } = Auth.useUser();

  useEffect(() => {
    getData();
  });

  async function getData(){
    let { data: teams, error } = await supabase.from('NFL_Teams').select('*');

    if (error) {
      console.error(`Error:\n${error}`);
      return;
    }

    console.log(teams);
  }

  return (
    <>
      {!user ? (
        <div className={styles.homeContainer}>
          <Container>
            <Auth
              className={styles.authContainer}
              supabaseClient={supabase}
              socialLayout='horizontal'
              socialButtonSize='xlarge'>
            </Auth>
          </Container>
        </div>
      ) : (
        <div className={styles.homeContainer}>
          <MainNavBar></MainNavBar>
          <Container>
            <h2 className={styles.welcomeTitle}>Welcome to the NFL Pick-em App</h2>
          </Container>
        </div>
      )}
    </>
  )
}
