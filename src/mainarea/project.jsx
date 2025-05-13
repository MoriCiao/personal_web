import React from "react";

function Project() {
  const projects = [
    {
      a_tag: "src/projects/project-universe/universe.html",
      name: "宇宙教學網站",
      p: "此專案為一個範例網站，利用Bootstrap 及 RWD排版。",
      img: "/public/projests-picture/nature/forest.jpg",
      state: "Done",
    },
    {
      a_tag: "#",
      name: "Hana Portfolio",
      p: "協助製作友人的Portfolio。",
      img: "/public/S__1974276_0.jpg",
      state: "施工中...",
    },
    {
      a_tag: "src/projects/simpleCalculator/calculator.html",
      name: "Simple Calculator",
      p: "JS製作的簡易的計算機",
      img: "/public/iconImg/calculator-solid.svg",
      state: "施工中...",
    },
    {
      a_tag: "src/projects/project-todolist/TodoList.html",
      name: "To DO List",
      p: "用 React 製作一個備忘錄。",
      img: "/public/iconImg/list-ul-solid.svg",
      state: "施工中...",
    },
    {
      a_tag: "/src/projects/search/search.html",
      name: "Search Image",
      p: "獲取API，可以搜尋圖片",
      img: "/public/iconImg/camera-solid.svg",
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
                  style={{ width: "15px", marginRight: "5px" }}
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
