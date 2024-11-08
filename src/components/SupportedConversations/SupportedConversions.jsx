import React from "react"
import "./SupportedConversions.css"
import { conversionData, connectivityAdapters } from "../../dummydata"
import Heading from "../common/heading/Heading"

const ConversionCard = ({ title, items }) => {
  return (
    <div className="conversion-card">
      <div className="content flex">
        <div className="left">
          <div className="img">
          <img src="/images/arrow.png" alt={title} />
          </div>
        </div>
        <div className="text">
          <h1>{title}</h1>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item">
                <i className="fas fa-exchange-alt"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const AdapterCard = ({ name }) => {
  // Map each adapter to a specific image
  const getImageSrc = (adapterName) => {
    switch (adapterName) {
      case "SFTP":
        return "/images/ftp_412502.png"; 
      case "IBM MQ":
        return "/images/ibm-mq.png"; // Update with actual path
      case "KAFKA":
        return "/images/kafka.webp"; // Update with actual path
      case "API":
        return "/images/apiteo.png"; // Update with actual path
      default:
        return "/images/default.png"; // Default image if none match
    }
  };

  return (
    <div className="adapter-card">
      <div className="img">
        <img src={getImageSrc(name)} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  );
};


const SupportedConversions = () => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <h2>Introduction to Financial Message Conversions</h2>
          <p>In today's global financial landscape, seamless communication between different messaging standards is crucial. Our conversion solutions bridge the gap between various financial message formats, ensuring smooth international transactions and compliance with evolving standards.</p>
        </div>
      </section>
      <section className="how-it-works">
  <div className="container">
    <div className="step-content">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="step-icon">Message Receipt</div>
          
         
        </div>
        <hr className="connector" />

        <div className="step">
          <div className="step-icon">Format Analysis</div>
         
          
        </div>
        <hr className="connector" />

        <div className="step">
          <div className="step-icon">Conversion Process</div>
       
        </div>
        <hr className="connector" />

        <div className="step">
          <div className="step-icon">Validation</div>
          
        </div>
        <hr className="connector" />

        <div className="step">
          <div className="step-icon">Delivery</div>
       
          
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="conversions-section padding">
        <Heading title="CONVERSIONS"subtitle="Supported Message Conversions"  />
        <div className="container grid2">
          {Object.entries(conversionData).map(([key, value]) => (
            <ConversionCard key={key} title={key.replace('_', ' to ').toUpperCase()} items={value} />
          ))}
        </div>
      </section>
      
      <section className="adapters-section padding">
        <Heading title="CONNECTIVITY" subtitle="Supported Connectivity Adapters" />
        <div className="container grid4">
          {connectivityAdapters.map((adapter, index) => (
            <AdapterCard key={index} name={adapter} />
          ))}
        </div>
      </section>
    </>
  )
}

export default SupportedConversions