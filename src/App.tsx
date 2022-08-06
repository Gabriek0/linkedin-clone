import React from "react";
import Layout from "./components/Layout";

import MobileHeader from "./components/MobileHeader";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <MobileHeader />
      <Layout />

      <GlobalStyles />
    </>
  );
}

export default App;
