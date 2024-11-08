import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BenefitsCard"
import "./benefits.css"

const Benefits = () => {
  return (
    <>
      <Back title='Our Benefits' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Benefits
