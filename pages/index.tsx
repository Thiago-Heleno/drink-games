import Head from 'next/head'
import Nav from '../components/Nav'
import Results from '../components/Results'
import InstallPwa from '../components/InstallPwa'
import {useRouter} from 'next/router'

import en from '../locales/en'
import ptBR from '../locales/pt-BR'

export default function Home() {
  let router = useRouter()
  let {locale} = router;
  let t = locale === "en" ? en : ptBR
  
  return (
  <>
    <Head>
      <title>Drink Games</title>
      <link rel="icon" href="/images/favicon.ico" />
    </Head> 
    
    <Nav />

    <div className="w-full m-0 md:p-2">
      <div className="w-full hidden md:inline-block">
        <div className="bg-black rounded-lg p-3">
          <div className="flex flex-row justify-begin gap-3">
            <p>Unique visits: 1039</p>
            <p>Shares: 24</p>
            <p>Current Players: 12</p>
          </div>
          <p className="font-bold text-white">Play with your friends!</p>
          
        </div>
      </div>

      <div className="w-full md:flex md:justify-items-center">
          <Results title="Medusa" location="/games/medusa" imgSrc="/images/games/medusa/logo.jpg" description={t.MedusaRules} />
          <Results title="The Flip Cup Drinking Game" location="/games/TheFlipCupDrinkingGame" imgSrc="/images/games/TheFlipCupDrinkingGame/logo.jpg" description={t.TheFlipCupDrinkingGameRules}/>
          <Results title="Back To Back" location="/games/BackToBack" imgSrc="/images/games/BackToBack/logo.jpg" description={t.BackToBackRules} />
          <Results title="Paranoia" location="/games/Paranoia" imgSrc="/images/games/Paranoia/logo.jpg" description={t.ParanoiaRules} />
      </div>
      <InstallPwa/>
      <div className="h-96"></div>
    </div>
   </>
  )
}
