import Results from "../components/Results";


function explore() {
  return (
    <>
    <p className="font-bold text-white m-5 text-2xl">Explore:</p>
    <div className="flex flex-col">
      <Results title="Medusa" location="/games/medusa" imgSrc="/images/games/medusa/logo.jpg"/>
    </div>
    </>
  )
}

export default explore
