import React from "react";
import Heading from "../../common/heading/Heading";
import styles from "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO FINFLOW"
              title="Eliminate chaos, enable seamless conversion"
            />
            <p
              style={{
                fontSize: "16px",
                color: "#555555",
                fontWeight: "normal",
              }}
            >
              Stop struggling with manual message format conversions between MX,
              MT, Fedwire, and ISO20022. Introducing FinFlow, your one-stop
              solution for automated, error-free message processing.
            </p>
            <div className="button">
            <section className={styles.hero}>
            <button
  className="primary-btn"
  style={{ cursor: "pointer" }}
  onClick={() =>
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth",
    })
  }
>
  GET STARTED NOW
  <i className="fa fa-long-arrow-alt-right" style={{ cursor: "pointer" }}></i>
</button>

<button
  className="secondary-btn"
  style={{ cursor: "pointer" }}
>
  EXPLORE FEATURES
  <i className="fa fa-long-arrow-alt-right" style={{ cursor: "pointer" }}></i>
</button>

            </section>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;