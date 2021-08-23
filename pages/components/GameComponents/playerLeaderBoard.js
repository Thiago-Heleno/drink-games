function PlayerLeaderBoard({players}) {
  console.log(players)
  
  const playerLeaderBoard = players.map((e, index) => {
    let className = ""
    if(index % 2 == 0){
      className = "flex flex-row gap-2 bg-yellow-400 justify-between group hover:bg-yellow-500"
    }else{
      className = "flex flex-row gap-2 bg-yellow-200 justify-between group hover:bg-yellow-500"
    }
    return(
        <div className={className}>
          <p className="m-3 font-bold text-xl text-gray-500 group-hover:text-white">{e.name}</p>
          <div className="flex flex-row gap-2 bg-gray-700 rounded-md">
            <p className="m-3 text-xl  text-white">Shots: </p>
            <p className="m-3 text-xl  text-white">{e.shots}</p>
          </div>
        </div>
    );
  })

  return (
    <>
      {playerLeaderBoard}
    </>
  )
}



export default PlayerLeaderBoard