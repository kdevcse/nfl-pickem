// ./initAuth.js
import { init } from 'next-firebase-auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsyNRciCC4HXqe2hDghDnH9t_QfDdR8YQ",
  authDomain: "nfl-pickem-8ffaa.firebaseapp.com",
  projectId: "nfl-pickem-8ffaa",
  messagingSenderId: "577389488854",
  appId: "1:577389488854:web:0eb368ef23e30f30d03777"
};

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAuthEmulatorHost: 'localhost:9099',
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'my-example-app-id',
        clientEmail: 'example-abc123@my-example-app.iam.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://my-example-app.firebaseio.com',
    },
    firebaseClientInitConfig: firebaseConfig,
    cookies: {
      name: 'nfl-pickem', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth;
