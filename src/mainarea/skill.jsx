import React from "react";
import Skill from "./Skills";

function SkillList() {
  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 50 },
    { name: "JavaScript", level: 30 },
    { name: "React", level: 30 },
  ];
  return (
    <div className="skill">
      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          <span>{skill.name}</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              style={{ width: `${skill.level}%` }}
            >
              {skill.level}%
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SkillList;
