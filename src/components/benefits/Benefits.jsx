import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BenefitsCard"
import "./benefits.css"

const Benefits = () => {
  return (
    <>
      <Back className="back" title='OUR BENEFITS' /> {/* Add the class "back" */}
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Benefits
