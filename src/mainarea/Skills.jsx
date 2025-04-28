import React from "react";
import SkillList from "./Skill";
const Skill = () => {
  return (
    <section id="skill">
      <div className="workskill">
        <h1>Skill</h1>
        <SkillList />
      </div>
      <hr />
      <div className="other-skills">
        <h1>Other Skills</h1>
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
