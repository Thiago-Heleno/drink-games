import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default appWithTranslation(MyApp)
