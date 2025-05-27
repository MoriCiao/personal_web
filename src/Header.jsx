import React, { useEffect, useRef, useState } from "react";

import Timer from "./timer";

const Header = () => {
  console.log("Header render ....");
  // 新增旅客，當Name 被輸入時，上方名稱會自動修正。
  const [name, setName] = useState("");
  const HandleChangeName = (e) => {
    console.log("HandleChangeName render ...");

    setName(e.target.value);
    console.log(`使用者在input輸入 ${e.target.value}`);
  };

  const inputElement = useRef(null);
  // 第一次載入頁面時，focus在表格內。
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <header className="header">
      <div>
        <section className="info-area">
          <div className="info">
            <h1 className="text-[2rem]">
              Hi <span className="useState-area">{name || "Stranger"}</span>，
              I'm <br />
              <strong>Rosen</strong>
            </h1>
            <p>
              目前對於網頁前端開發持續學習中，由於是處於轉行當中的我，對HTML、CSS、JavaScript、React較為熟悉。現代科技一直在進步，個人的技能也需要向未來持續增進。
            </p>
          </div>
          <div className="shortcut">
            <ul>
              <li>
                <a href="#story">
                  <div></div>
                  <span>個人經歷</span>
                </a>
              </li>
              <li>
                <a href="#work">
                  <div></div>
                  <span>工作經驗</span>
                </a>
              </li>
              <li>
                <a href="#skill">
                  <div></div>
                  <span>技能專長</span>
                </a>
              </li>
              <li>
                <a href="#project">
                  <div></div>
                  <span>專案製作</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <form
              action="https://formsubmit.co/bboynoice@Gmail.com"
              method="POST"
            >
              <label htmlFor="">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name or Business units"
                ref={inputElement}
                // 對應
                onChange={HandleChangeName}
              />
              <label htmlFor="">Email</label>
              <input name="email" type="email" placeholder="Email Address" />
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                id=""
                placeholder="Your Message ..."
                required
              ></textarea>
              <div className="submit-area">
                <button type="submit">submit</button>
                <Timer />
              </div>
            </form>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
