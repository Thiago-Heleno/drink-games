import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import PlayerLeaderBoard from '../../../components/GameComponents/PlayerLeaderBoard';
import ResultsLeaderboard from '../../../components/GameComponents/ResultsLeaderboard';
import AddPlayer from '../../../components/GameComponents/AddPlayer';
import AddPlayerList from '../../../components/GameComponents/AddPlayerList';

import {
  TrashIcon,
  ShareIcon,
  HomeIcon
} from '@heroicons/react/outline'

import en from '../../../locales/en'
import ptBR from '../../../locales/pt-BR'


const TheFlipCupDrinkingGame = () => {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);
  const [round, setRound] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();
  const t = router.locale === 'en' ? en : ptBR;

  useEffect(() => {
    if(router.query.gameStarted == "True" || router.query.gameStarted == "Ended"){
      setPlayers(JSON.parse(router.query.players))
      setGameStarted(true)
      if(router.query.gameStarted == "Ended"){
        setLeaderboard(true)
      }
    }
  }, [router])


  function addPlayer (name) {
    const found = players.some(el => el.name === name);
    if (!found){
      setPlayers([...players, {"name": name, "shots": 0}]);
    }else{
      setError(t.sameNameError);
    }
    return;
  }

  function removePlayer (index) {
    if(index == 0 && Object.keys(players).length <= 1) {
      setPlayers([])
    }else{
      let nr = players.filter(item => item.name !== index)
      setPlayers(nr);
    }
  }

  function addShot(playerName){
    let index = players.findIndex( x => x.name === playerName );
    let temp_state = [...players];
    let temp_element = { ...temp_state[index] };
    temp_element.shots = temp_element.shots+1;
    temp_state[index] = temp_element;
    let sortedArray = sortArray(temp_state)
    setPlayers( sortedArray );
  }

  function startGame(){
    router.query.players = JSON.stringify(players)
    router.query.gameStarted = "True"
    router.push(router)
    setGameStarted(true)
  }
 

  function onTodoChange(e) {
    if(isNaN(+e)) return setPlayers(0);
    setPlayers(e)
  }

  function shareGame(){
    let domain = "http://localhost:3000"
    navigator.clipboard.writeText(`${domain}${router.asPath}`)
  }

  function sortArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j].shots < array[i].shots) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  
  const AlertMessage = () => {
    if(error == null) return null;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setTimeout(()=>{
      setError()
    }, 5000)
    return(
      <div className="bg-red-500 border-l-4 border-red-800 text-white p-4 absolute top-0 right-0 z-50 animate-appear" role="alert">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    )
  }


  return (
    <>
    <AlertMessage/>
    {gameStarted && leaderboard ?
      <>
        <p className="text-2xl font-bold text-white">Game Results:</p>
        <ResultsLeaderboard players={players}/>
        <button onClick={()=> shareGame()} className="flex flex-row gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded m-auto focus:outline-none"><ShareIcon className="h-5"/>Share The Results!</button>
        
        <Link href="/">
          <a><button className="flex flex-row gap-2 mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-auto focus:outline-none"><HomeIcon className="h-5"/>Back to Home!</button></a>
        </Link>
      </>
      : gameStarted ?
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-white">Paranoia Game</p>
        <PlayerLeaderBoard onClick={(value) => addShot(value)} players={players}/>
        <button onClick={()=>{setLeaderboard(true); router.query.gameStarted = "Ended"; router.query.players = JSON.stringify(players); router.push(router)}} className="mb-4 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded m-auto focus:outline-none">End Game!</button>
      </div>
    :
    <div className="m-5 flex flex-col">
      <p>({t.ReadOutLoud})</p>
      <p className="text-4xl font-bold">{t.Instructions}:</p>
      <p>{t.ParanoiaRules}</p>
      
      <AddPlayer onClick={(value) => addPlayer(value)} onKeyDown={(value) => addPlayer(value)} />
      <button onClick={() => startGame()} className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-auto focus:outline-none">Start Game!</button>
      <AddPlayerList onClick={(value) => removePlayer(value)} players={players}/>
    </div>
    }
    <div className="h-96"/>
    </>
  )
}


export default TheFlipCupDrinkingGame