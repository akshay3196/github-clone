import { useEffect } from 'react';
import '../styles/globals.css'



function MyApp({ Component, pageProps: { ...pageProps } }) {
  
  return <Component {...pageProps} />
}




export default MyApp
