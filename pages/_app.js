import '../styles/globals.css';
import { Auth } from '@supabase/ui';
import { supabase } from '../utilities/supabaseConfig';

function MyApp({ Component, pageProps }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  );
}

export default MyApp
