import React from "react";
import SkillList from "./skill";
const Skill = () => {
  console.log("Skill render ...");
  return (
    <section id="skill">
      <div className="workskill">
        <h1 className="text-[2rem]">Skill</h1>
        <SkillList />
      </div>
      <hr />
      <div className="other-skills">
        <h1 className="text-[2rem] mt-4">Other Skills</h1>
        <div className="o-skillarea">
          <div className="o-skill">
            <img src="/iconImg/Ps_icon.jpg" alt="Ps" />
            <p>Photoshop</p>
          </div>
          <div className="o-skill">
            <img src="/iconImg/Ai_icon.png" alt="" />
            <p>illustrator</p>
          </div>
          <div className="o-skill">
            <img src="/iconImg/github-brands.svg" alt="" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
