import React from "react";
import Hero2 from "../components/Hero2";
import Pricing from "../components/Pricing";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      
      <Hero2 heading="PROJECTS." text="Some of my most recent projects" />
      <Work />
      <Pricing />
    </div>
  );
};

export default Project;
