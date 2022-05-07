import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { UserProvider } from '../contexts/UserContext'
import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
