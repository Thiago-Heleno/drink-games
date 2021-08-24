import {HeartIcon} from '@heroicons/react/solid'

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-row gap-2 bg-black justify-center bottom-100">
      <p className="font-bold">Made with </p>
      <HeartIcon className="h-6"/>
      <a href="https://www.instagram.com/mctibis/">
        <p className="font-bold">by <u>@mctibis</u></p>
      </a>
    </div>
  )
}

export default Footer
