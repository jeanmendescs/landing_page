import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Presentation from "./components/Presentation";
import Tech from "./components/Tech";
import Form from "./components/Form/";
import Partner from "./components/Partner/";
import Footer from "./components/Footer";
import "./reset.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Presentation />
      <Tech />
      <Partner />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
