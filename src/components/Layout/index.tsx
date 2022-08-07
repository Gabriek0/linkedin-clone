import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
}

export default Layout;
