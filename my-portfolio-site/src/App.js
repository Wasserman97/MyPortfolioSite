// App.js

import React from "react";
import "./App.css"; // Se necessário, você pode adicionar estilos globais aqui
import Nav from "./Nav";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Aside />
      <Footer />
    </div>
  );
};

export default App;
