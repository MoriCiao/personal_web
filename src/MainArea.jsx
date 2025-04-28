import React from "react";
import Story from "./mainarea/Story";
import Work from "./mainarea/Work";
import Skills from "./mainarea/Skills";
import Projects from "./mainarea/Projects";

const MainArea = () => {
  return (
    <main className="">
      <hr className="d-md-none" />
      <Story />
      <hr />
      <Work />
      <hr />
      <Skills />
      <hr />
      <Projects />
    </main>
  );
};

export default MainArea;
