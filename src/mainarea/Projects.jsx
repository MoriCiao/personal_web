import React from "react";
import Project from "./project.jsx";
const Projects = () => {
  console.log("Projects render ...");
  return (
    <section id="project" className="project-area">
      <h1 className="text-[2rem]">Project</h1>
      <Project />
    </section>
  );
};

export default Projects;
