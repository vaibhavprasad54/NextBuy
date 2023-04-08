import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from "next/router";

function Footer() {

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#0d1b31] flex-grow py-5 px-5 sm:px-10">
        <p className="text-white text-sm sm:text-base">Made with NextJS and Tailwind ❤️</p>
        <p className="text-gray-300 text-xs sm:text-sm">Copyright © 2023 NextBuy </p>
        <div className="social-media flex items-center space-x-2 mt-2">
          <FontAwesomeIcon target="#" onClick={() => router.push("https://www.instagram.com/vaybhav77/")} className="text-white cursor-pointer fa-md px-1 hover:text-[#e652c4] hover:scale-125 transform 
                                transition duration-200" icon={faInstagram} />
          <FontAwesomeIcon onClick={() => router.push("https://twitter.com/webdev_07")} className="text-white cursor-pointer fa-lg px-1 hover:text-blue-400 hover:scale-125 transform 
                                transition duration-200" icon={faTwitter} />
          <FontAwesomeIcon onClick={() => router.push("https://www.linkedin.com/in/vaibhav-prasad-495451166/")} className="text-white cursor-pointer fa-md px-1 hover:text-blue-900 hover:scale-125 transform 
                                transition duration-200" icon={faLinkedin} />
        </div>
    </div>
  )
}

export default Footer