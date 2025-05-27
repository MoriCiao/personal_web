import React from "react";
import Bg_blur from "./Bg_blur";
import Header from "./Header";
import MainArea from "./MainArea";
import Footer from "./Footer";
import "./index.css";
const App = () => {
  console.log("App render ...");
  return (
    <div className="space">
      <Bg_blur />
      <Header />
      <MainArea />
      <Footer />
    </div>
  );
};

export default App;
