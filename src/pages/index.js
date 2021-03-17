import React from "react"
import { Link } from "gatsby"
import { FaInstagramSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import Headshot from "../images/Juliana.jpg"

export default function Home() {
  return (
    <div className="md:flex">
      <div className="info h-72 md:h-screen md:w-96 lg:w-1/3 flex justify-center items-center bg-mountains bg-cover bg-bottom">
        <div className="info__container">
          <img
            src={Headshot}
            alt="Headshot"
            className="rounded-full h-28 md:h-52 m-auto mb-3"
          />
          <Link class="uppercase text-2xl md:text-4xl text-white border-b-2">
            juliana brandt
          </Link>

          <div className="socials flex justify-around py-1 md:py-2">
            <Link>
              <FaTwitterSquare className="text-white text-3xl md:text-4xl hover:text-gray-300" />
            </Link>
            <Link>
              <FaInstagramSquare className="text-white text-3xl md:text-4xl hover:text-gray-200" />
            </Link>
            <Link>
              <FaFacebookSquare className="text-white text-3xl md:text-4xl hover:text-gray-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
