import { useEffect } from 'react';
import '../styles/globals.css'
import {
  ClerkProvider,
  SignIn,
  SignedOut,
  UserButton
} from "@clerk/clerk-react";
import { useRef } from 'react';
import ReactModal from 'react-modal';


export const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps }) {

  

 
  
  return <ClerkProvider {...pageProps}  frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API} >
   
 
   
    <Component {...pageProps} />
    
    
      
    </ClerkProvider>
}




export default MyApp
