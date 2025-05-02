const screen = document.getElementById("screen");
const currentNumber = document.getElementById("currentNumber");
const btns = document.querySelectorAll("button");
let preNumber = "";
let currentOp = "";
const operator = "+-*/";
let opState = false;
document.addEventListener("keydown", (e) => {
  console.log("你按下了鍵盤：", e.key, typeof e.key);
  let state_nav = "state-1";

  btns.forEach((btn) => {
    btn.click();
    if (e.key.toLocaleLowerCase() === btn.value) {
      btn.classList.add("active");
      setTimeout(() => {
        btn.classList.remove("active");
      }, 150);
      // 限制輸入數字及小數點
      if (/\d/.test(e.key) || e.key === "." || e.key === "-") {
        if (e.key === "-") {
          if (screen.textContent === "") {
            // 如果目前是空值時，可以輸入負號
            console.log(e.key + " 已輸入");
            screen.textContent += e.key;
            currentNumber.textContent += e.key;
          }
          if (/\d/.test(screen.textContent.slice(-1))) {
            // 當第一個值為負數時，如果做後一個值為數值，還可以繼續輸入 - 的運算符號
            screen.textContent += e.key;
          }
        } else if ((e.key === "0") & (screen.textContent === "")) {
          console.log("第一個數自不能空白或是為 0");
        } else {
          screen.textContent += e.key;
          currentNumber.textContent += e.key;
          console.log(e.key);
        }
      } else if (e.key.toLocaleLowerCase() === "c") {
        // 設定清除鍵
        console.log("已觸發");
        screen.textContent = "";
        currentNumber.textContent = "";
        preNumber = "";
      } else if (e.key.toLocaleLowerCase() === "backspace") {
        // 設定迴車鍵

        screen.textContent = screen.textContent.slice(0, -1);
        currentNumber.textContent = currentNumber.textContent.slice(0, -1);
      } else if (operator.includes(e.key)) {
        currentOp = e.key;
        preNumber = screen.textContent;
        let lastChar = screen.textContent.slice(-1);
        console.log("最後一個值為 " + lastChar);
        if (/\d/.test(lastChar)) {
          // 如果最後一個值為數字，則輸入運算符號
          screen.textContent += e.key;
          currentNumber.textContent = "";
          console.log(`運算符號 ${e.key} 已加入`);
        } else if (!/\d/.test(lastChar)) {
          // 如果最後值為運算符，則運算符號變更
          screen.textContent = screen.textContent.slice(0, -1) + e.key;
          console.log("運算符號已變更為 " + e.key);
        }

        console.log(preNumber, currentOp);
      } else if (e.key.toLocaleLowerCase() === "enter") {
        // 把數值加入計算
        let N1 = "";
        let N2 = "";
        let op = "";
        let state = "N1_state";

        for (let i = 0; i < screen.textContent.length; i++) {
          const char = screen.textContent[i];
          if (/\d/.test(char) || char === ".") {
            if (state === "N1_state") {
              N1 += char;
            } else if (state === "N2_state") {
              N2 += char;
            }
          } else if (char === "-" && i === 0 && state === "N1_state") {
            // 如果遇到N1負值時
            N1 += char;
          } else if (!/\d/.test(char)) {
            op += char;
            // change state
            state = "N2_state";
          }
        }
        console.log(`N1 is ${N1}, op is ${op}, N2 is ${N2}`);
        let reslut;
        console.log(screen.textContent);
        switch (op) {
          default:
            console.log("不支援運算!");
            console.log(N1);
            console.log(N2);
            break;
          case "+":
            reslut = parseFloat(N1) + parseFloat(N2);
            break;
          case "-":
            reslut = parseFloat(N1) - parseFloat(N2);
            break;
          case "*":
            reslut = parseFloat(N1) * parseFloat(N2);
            break;
          case "/":
            reslut = (parseFloat(N1) / parseFloat(N2)).toFixed(2);
            break;
        }

        screen.textContent = reslut;
        currentNumber.textContent = reslut;
        preNumber = reslut;
        currentOp = "";
        state_nav = "state-1";
        console.log("preNumber is " + preNumber, typeof preNumber);
      }
    }
  });
});
