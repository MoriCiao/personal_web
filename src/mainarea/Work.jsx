import React from "react";

const Work = () => {
  console.log("Work render ...");
  return (
    <section id="work">
      <div className="work">
        <h1 className="text-[2rem]">Work Experience</h1>
        <p className="fs-5">
          <i className="bi bi-caret-right"> </i>海龜舊傷助理：2017/ 02 ~ 2017/
          08
        </p>
        <p className="fs-5">
          <i className="bi bi-caret-right"> </i>穩發遠洋漁船：2017/ 12 ~ 2018/
          09
        </p>
        <p className="fs-5">
          <i className="bi bi-caret-right"> </i>露易莎咖啡廳：2020/ 03 ~ 2021/
          08
        </p>
        <p className="fs-5">
          <i className="bi bi-caret-right"> </i>Musashi 職人的店：2022/ 03 ~
          今日
        </p>
      </div>
    </section>
  );
};

export default Work;
