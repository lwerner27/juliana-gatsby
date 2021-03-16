import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <nav className="bg-green-500 py-5">
      <div className="nav__container max-w-6xl mx-auto">
        <Link className="text-white uppercase cursor-pointer">
          juliana brandt
        </Link>
      </div>
    </nav>
  )
}
