import React from "react";

function Project() {
  const projects = [
    {
      a_tag: "src/projects/project-universe/universe.html",
      name: "宇宙教學網站",
      p: "此專案會利用Bootstap 及 RWD排版。",
      img: "/public/projests-picture/nature/forest.jpg",
      state: "Done",
    },
    {
      a_tag: "https://github.com/MoriCiao/Friend-s-Portfolio",
      name: "Hana Portfolio",
      p: "協助製作友人的Portfolio。",
      img: "/public/S__1974276_0.jpg",
      state: "施工中...",
    },
    {
      a_tag: "",
      name: "Tools",
      p: "製作一些簡單的小工具",
      img: "/public/S__1974276_0.jpg",
      state: "施工中...",
    },
  ];

  return (
    <div className="react-project">
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <a href={project.a_tag} className="project" target="_blank">
            <div className="img-container">
              <img src={project.img} alt="" className="project-img" />
            </div>
            <div className="description">
              <h4>{project.name}</h4>
              <p>{project.p}</p>
              <p className="state">
                <img
                  src="public\iconImg\hammer-solid.svg"
                  alt=""
                  style={{ width: "20px", marginRight: "5px" }}
                  className="state"
                />
                {project.state}
              </p>
            </div>
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Project;
