import Link from 'next/link'
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  TemplateIcon,
  MenuAlt1Icon
} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"
import {useRef, useState, useEffect} from 'react'

function Header() {
  const [search, setSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState()
  const [searchResults, setSearchResults] = useState([{name: "A"}, {name: "B"}])
  
  const ref = useRef();
  useEffect(() => {
    if(search){
      ref.current.focus();
    };
  },[search])

  
  
  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
    let maybeHandler = (event)=> {
      if(domNode.current && !domNode.current.contains(event.target)){
        handler()
      }
    }
    document.addEventListener("mousedown", maybeHandler)

    return () =>{
      document.removeEventListener("mousedown", maybeHandler);
    }
  })
  return domNode
  }

  let domNode = useClickOutside(()=>{
      setSearch(false)
  })

  const renderedSearch = searchResults.map((e, index)=>{
    let className = ""
    if(index % 2 == 0){
      className = "bg-red-300"
    }else{
      className = "bg-red-400"
    }
    return(
      <li className={className}>{e.name}</li>
    )
  })

  return (
    <>
    <header className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/"><a>
          <HeaderItem title="Home" Icon={HomeIcon}/>
        </a></Link>
        <Link href="/explore"><a>
          <HeaderItem title="Explore" Icon={TemplateIcon}/>
        </a></Link>
        <Link href="/account"><a>
          <HeaderItem title="Account" Icon={UserIcon}/>
        </a></Link>
        
       
        <button ref={domNode} className="outline-none focus:outline-none" onClick={()=> {setSearch((search) => !search)}}>  
        
          <HeaderItem title="Search" Icon={SearchIcon}/>
        </button>
      </div>
      <Link href="/"><a>
        <img src="logo.png" className="object-contain" width={200} height={200}/>
      </a></Link>
    </header>
    {search &&
      <div>
        <div className="flex flex-col lg:w-3/12 md:w-100 m-auto">
          <input ref={ref} placeholder="Search Here..." type="text" onChange={(e) => setSearchQuery(e.target.value)} className="shadow appearance-none border rounded-b-none rounded-t-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {
            searchResults.length > 0 &&
            <div>
              <ul>
                {renderedSearch}
              </ul>
              <Link href={"/search?s=" + searchQuery}><a>
                <p className="text-white font-bold text-lg hover:text-gray-400 bg-yellow-300 rounded-b-lg text-center">Show More!</p>
              </a></Link>
            </div>
          }
        </div>
      </div>
    }
    </>
  )
}

export default Header
