
import Head from 'next/head'
import Image from 'next/image'
import Following from '../components/Following'
import Header from '../components/Header'
import RecentRepos from '../components/RecentRepos'
import FullHeader from '../components/FullHeader'
import RightSide from '../components/RightSide'
import { useAuth ,SignIn,
  SignedOut, } from '@clerk/nextjs';
import ReactModal from 'react-modal';
import { useEffect, useState } from 'react'


// md:h-screen

const Home = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [modal, setmodal] = useState(false)

console.log(sessionId,userId);

useEffect(() => {
  if (
    sessionId==='' || sessionId == null ) {
    setmodal(true)
  }else{
    setmodal(false)
  }
 
}, [sessionId])



  return (
    <>
<ReactModal
   isOpen={modal}
   ariaHideApp={false}
   style={{
    overlay: {},
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: 'none',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}


   >
  <SignedOut>
        <SignIn />
      </SignedOut>
   </ReactModal>

    <FullHeader />
    <div className="bg-black text-white md:flex w-[100%]  h-[100%] bg-cover">
      <Head>
        <title>GitHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
 
      
      <RecentRepos />
      <Following/>
      <RightSide/>

      
    </div>
    </>
    
  )
}



export default Home
