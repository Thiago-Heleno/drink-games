import Head from 'next/head'
import Nav from '../components/Nav'
import Results from '../components/Results'
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <Head>
      <title>Drink Games</title>
      <link rel="icon" href="/images/favicon.ico" />
    </Head> 
    
    <Nav />

    <div className="w-full">
      <div className="bg-black rounded-lg h-80 m-10 flex flex-col justify-end">
        <p className="font-bold text-white m-3">Play with your friends</p>
      </div>
    </div>

    <div className="md:flex">
      
        <Results title="Medusa" location="/games/medusa" imgSrc="/images/games/medusa/logo.jpg"/>
      
    </div>
   </>
  )
}
