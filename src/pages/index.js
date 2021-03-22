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

      <main className="md:h-screen md:overflow-y-scroll lg:w-2/3">
        <section className="about md:h-screen px-10 pt-10 ">
          <p class="section__header text-6xl mb-3">ABOUT</p>
          <p class="leading-loose text-xl">
          Juliana Brandt is an author and kindergarten teacher with a passion for storytelling that guides her in both of her jobs. She lives in her childhood home of Minnesota, and her writing is heavily influenced by travels around the country and decade living in the South.
          </p>
          <br></br>
          <p class="leading-loose text-xl">
          When not working, she is usually exploring the great outdoors. Her debut novel, <strong>THE WOLF OF CAPE FEN</strong>, was published by SourcebooksKids on April 7th, 2020.  Her sophomore novel, <strong>A WILDER MAGIC</strong>, will publish May 2021. Her writing is represented by Natalie Lakosil of Bradford Literary Agency.
          </p>
        </section>
        <section className="about md:h-screen bg-green-500"></section>
        <section className="about md:h-screen bg-pink-500"></section>
      </main>
    </div>
  )
}
