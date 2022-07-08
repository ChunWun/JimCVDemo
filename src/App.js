import Header from "./components/Header/Header.js";
import React from "react";
import Brief from "./components/SkillInfo/Brief.js";
import CartContextProvider from "./components/Context/CartContextProvider.js";

function App() {

  return (
    <CartContextProvider>
      <Header />
      <main>
        <Brief />
      </main>
    </CartContextProvider>
  );
}

export default App;
