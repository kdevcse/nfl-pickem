import '../styles/globals.css';
import initAuth from '../utilities/firebaseConfig';

try {
  initAuth();
} catch (error) {
  console.log('Firebase admin initialization error', error.stack);
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
