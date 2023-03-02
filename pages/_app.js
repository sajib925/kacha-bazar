import '@/styles/globals.css'
import { Inter } from '@next/font/google';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

const inter = Inter({subsets: ["latin"], variable: ["--font-inter"]});


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
