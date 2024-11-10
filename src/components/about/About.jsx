import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <div id="about">
      <Back title='About Us' />
      <AboutCard />
    </div>
  )
}

export default About