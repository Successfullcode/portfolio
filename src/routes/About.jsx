import React from 'react'
import Hero2 from '../components/Hero2'
import AboutContent from "../components/AboutContent"

const About = () => {
  return (
    <div>
      <Hero2
        heading="ABOUT."
        text="I'm SucceDevX. Experienced wed developer with experties in [Html and Css, Javascript, REACT.JS & MONGO DB]."
      />
      <AboutContent />
    </div>
  );
}

export default About