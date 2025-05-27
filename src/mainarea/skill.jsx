import React from "react";

function SkillList() {
  console.log("SkillList render ...");
  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 55 },
    { name: "JavaScript", level: 30 },
    { name: "React", level: 40 },
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
