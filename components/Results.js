import Link from "next/link"
import {
  StarIcon,
  UserGroupIcon,
  PlayIcon
} from '@heroicons/react/outline'

function Results({title, location, imgSrc}) {
  return (
    <div className="hover:opacity-80 w-96 group">
      <Link href={location}>
        <a className="grid grid-cols-1">
         

          <img alt="Game Thumbnail" src={imgSrc} className="rounded-t-xl pt-2 px-2 bg-gradient-to-br from-purple-400 to-pink-500 m-auto object-contain" width={300} height={200}/>
          
          <div className="flex flex-col m-auto mb-5 bg-gradient-to-br from-purple-400 to-pink-500
            rounded-lg border-b-4 border-purple-500 hover:border-purple-500">
            <div className=" flex flex-row justify-between">
              <p className="group-hover:text-white text-left text-2xl p-5">{title}</p>
              <div className="flex flex-row">
                <div className="flex flex-row p-5">
                  <UserGroupIcon className="h-8" />
                  <p className="h-8 group-hover:text-white text-2xl">12</p>
                </div>
                <div className="flex flex-row p-5">
                  <StarIcon className="h-8" />
                  <p className="h-8 group-hover:text-white text-2xl">5</p>
                </div>
              </div>
            </div>
            <button className="m-auto flex flex-row rounded-lg bg-green-400 p-2 gap-1 mb-5 border-b-4 border-green-600">
              <PlayIcon className="h-8"/>
              <p className="font-bold text-xl">Play</p>
            </button>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Results
