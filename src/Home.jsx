import React, { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  console.log(openSidebar)
  return <h2>home </h2>
}

export default Home
