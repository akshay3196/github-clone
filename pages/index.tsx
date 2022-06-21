import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Following from '../components/Following'
import Header from '../components/Header'
import RecentRepos from '../components/RecentRepos'
import FullHeader from '../components/FullHeader'
import RightSide from '../components/RightSide'

const Home: NextPage = () => {
  return (
    <>
    <FullHeader />
    <div className="bg-black text-white w-full  md:flex  md:h-screen h-auto bg-cover">
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
