import React from "react";

import { Container, MessageIcon, ProfileCircle, SearchInput } from "./styles";

function MobileHeader() {
  return (
    <Container>
      <ProfileCircle src="https://avatars.githubusercontent.com/u/89749843?v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;
