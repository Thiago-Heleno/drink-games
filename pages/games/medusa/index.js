import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import PlayerLeaderBoard from '../../../components/GameComponents/PlayerLeaderBoard';
import AddPlayer from '../../../components/GameComponents/AddPlayer';


const Medusa = () => {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [round, setRound] = useState(false);
  const [playerName, setPlayerName] = useState();
  const [error, setError] = useState();
  const router = useRouter();

  useEffect(() => {
    if(router.query.gameStarted){
      setPlayers(JSON.parse(router.query.players))
      setGameStarted(true)
    }
  }, [router])


  function addPlayer (name) {
    //let r = players.push({"name": name, "shots": 0})
    //setPlayers();
    if(Object.keys(players).length == 0) {
      setPlayers([...players, {"name": name, "shots": 0}])
    }else {
      for(var i = 0; i < Object.keys(players).length; i++){
        if(players[i].name == name){
          setError("Cannot have the same name as another player!");
          return
        }else{
          setPlayers([...players, {"name": name, "shots": 0}])
        }
      }
    }
  }

  function removePlayer (index) {
    if(index == 0 && Object.keys(players).length <= 1) {
      setPlayers([])
    }else{
      let nr = players.filter(item => item.name !== index)
      setPlayers(nr);
    }
  }

  function startGame(){
    router.query.players = JSON.stringify(players)
    router.query.gameStarted = "true"
    router.push(router)
    setGameStarted(true)
  }
 

  function onTodoChange(e) {
    if(isNaN(+e)) return setPlayers(0);
    setPlayers(e)
  }

  
  const AlertMessage = () => {
    if(error == null) return null;
    setTimeout(()=>{
      setError()
    }, 5000)
    return(
      <div className="bg-red-500 border-l-4 border-red-800 text-white p-4 position-absolute top-0" role="alert">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    )
  }

  const playerObject = players.map((e, index) => {
    return(
      <div key={index} className="mt-5 flex flex-row gap-2 bg-yellow-400 justify-between">
        <p className="m-3 font-bold text-xl text-white">{e.name}</p>
        <button onClick={()=> removePlayer(e.name)} className="m-3 bg-red-500 text-white hover:bg-red-400 h-full w-20 cursor-pointer focus:outline-none">
          <span className="m-auto text-xl text-center text-white">Remove</span>
        </button>
      </div>
    );
  })

  

  return (
    <>
    <AlertMessage/>
    {gameStarted ?
    <div className="flex flex-col">
      <p className="text-2xl font-bold text-white">Penis</p>
      <PlayerLeaderBoard players={players}/>
    </div>
    :
    <div className="m-5 flex flex-col">
      <p>(Read out Loud!)</p>
      <p className="text-4xl font-bold">Instructions:</p>
      <p>Everyone sits around the table of shot glasses. Someone counts down from 3 to 1. Then everyone looks up at stares into another players eyes. If someone is staring back into another player{`'`}s eyes both players shout ”MEDUSA!” and both players drink a shot.</p>
      
      <label className="text-center w-full text-white text-xl font-bold">Players:</label>
      <div className="m-auto my-5 bg-yellow-400">
        <div className="flex flex-row rounded-lg relative bg-transparent gap-1 m-2">
          
          <div>
            <p className="font-bold text-xl text-white">Player Name:</p>
            <input type="text" onChange={(e) => setPlayerName(e.target.value)} onKeyDown={(e)=>{if(e.key === 'Enter'){addPlayer(playerName)}}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl text-white">Add Player</p>
            <button onClick={() => {if(playerName != null) addPlayer(playerName)}} className="m-auto bg-green-500 text-white hover:bg-green-400 h-full w-20 cursor-pointer focus:outline-none">
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
      
        </div>
      </div>

      <AddPlayer onClick={(value) => addPlayer(value)} onKeyDown={(value) => addPlayer(value)} />

      <button onClick={() => startGame()} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-auto focus:outline-none">Play!</button>
    
    {playerObject}
          
    </div>
    }
    </>
  )
}


export default Medusa