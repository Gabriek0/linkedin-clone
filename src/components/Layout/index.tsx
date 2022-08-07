import React from "react";

import { Container } from "./styles";

import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";

function Layout() {
  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />

      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
}

export default Layout;
