import React from "react";

const Story = () => {
  return (
    <section id="story" className="story">
      <h1>Story</h1>
      <p>
        學習前端的初衷是在目前公司，經常使用
        <strong style={{ color: "rgb(255, 177, 27)" }}> Excel </strong>
        但沒有效率的方式去處理各種工作，導致完成時間拉長。
      </p>
      <p>
        因此，我花幾個月在家研究 Excel如何提高效率， 把需要 30 - 60 分鐘的事情，
        <strong style={{ color: "rgb(255, 177, 27)" }}>
          提高效率變成 10 - 20 分鐘
        </strong>{" "}
      </p>
      <p>
        從 Excel 的啟發，開始買線上課程自學 HTML、CSS、SCSS、JavaScript
        、React。非本科系的我學會新技能加以運用，感受到
        <strong style={{ color: "rgb(255, 177, 27)" }}>自我成長的重要性</strong>
        。
      </p>
    </section>
  );
};

export default Story;
