import React from "react";
import {
  CaretDownIcon,
  Container,
  HomeIcon,
  LinkedinIcon,
  NotificationsIcon,
  ProfileCircle,
  SearchInput,
  Wraper,
} from "./styles";

function DesktopHeader() {
  return (
    <Container>
      <Wraper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars.githubusercontent.com/u/89749843?v=4" />
              <span>
                Eu
                <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wraper>
    </Container>
  );
}

export default DesktopHeader;
