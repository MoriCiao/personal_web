import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CartBodyArea from "../projects/project-cart/CartBodyArea.jsx";

function Project() {
  const projects = [
    {
      a_tag: "/public/projectHTML/project-universe/universe.html",
      name: "宇宙教學網站",
      p: "此專案為一個範例網站，利用Bootstrap 及 RWD排版。",
      img: "/public/projests-picture/nature/forest.jpg",
      state: "Done",
    },
    {
      a_tag: "#",
      name: "Hana Portfolio",
      p: "協助製作友人的Portfolio。",
      img: "/public/projests-picture/hana/1747461275694.jpg",
      state: "施工中...",
    },
    {
      a_tag: "/public/projectHTML/calculator.html",
      name: "Simple Calculator",
      p: "JS製作的簡易的計算機",
      img: "/public/projests-picture/calculator/1747460931846.jpg",
      state: "施工中...",
    },
    {
      a_tag: "/public/projectHTML/TodoList.html",
      name: "To DO List",
      p: "用 React 製作一個備忘錄。",
      img: "/public/projests-picture/todo/note.jpg",
      state: "Done",
    },
    {
      a_tag: "/public/projectHTML/search.html",
      name: "Search Image",
      p: "輸入API Key，搜尋圖片",
      img: "/public/projests-picture/search/S__48201744.jpg",
      state: "Done",
    },
    {
      a_tag: "/public/projectHTML/cart.html",
      name: "Cart",
      p: "",
      img: "/public/projests-picture/cart/1747462770596.jpg",
      state: "施工中...",
    },
  ];

  const projectsLink = [
    {
      a_tag: "./projects/project-cart/CartBodyArea.jsx",
      name: "Cart",
      p: "此專案為一個範例網站，利用Bootstrap 及 RWD排版。",
      img: "/public/projests-picture/nature/forest.jpg",
      state: "Done",
    },
  ];
  return (
    <div className="react-project">
      {/* 這邊是 LINK */}
      {projectsLink.map((pLink, index) => {
        return (
          <Link to="/projects/project-cart/cart" key={pLink.index}>
            <div className="img-container">
              <img src={pLink.img} alt="" className="project-img" />
            </div>
            <div className="description">
              <h4>{pLink.name}</h4>
              <p>{pLink.p}</p>
              <p className="state">{pLink.state}</p>
            </div>
          </Link>
        );
      })}
      {/* ------------------------------ */}
      {/* {projects.map((project, index) => (
        <React.Fragment key={index}>
          <a href={project.a_tag} className="project" target="_blank">
            <div className="img-container">
              <img src={project.img} alt="" className="project-img" />
            </div>
            <div className="description">
              <h4>{project.name}</h4>
              <p>{project.p}</p>
              <p className="state">{project.state}</p>
            </div>
          </a>
        </React.Fragment>
      ))} */}
    </div>
  );
}

export default Project;
