import styled, { css } from "styled-components";

import { AiFillLinkedin, AiFillHome, AiOutlineCaretDown } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

export const Container = styled.header`
  background: var(--color-white);

  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 0;

  display: none;

  @media (min-width: 1180px) {
    display: unset;
  }
`;

export const SearchInput = styled.input`
  height: 32px;

  margin-left: 12px;

  font-size: 14px;

  background: var(--color-input);

  border-radius: 4px;

  border: none;
  padding: 0 0.8rem 0 2.5rem;
`;

export const Wraper = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  flex: 1; // Vai crescer e diminuir de acordo com a proporção da tela

  // flex: 1 é igual
  // flex-shrink: 1;
  // flex-grow: 1;
  // flex-basis: 0; cada componente vai pegar o tamanho da tela, então se há 3 componentes cada um terá 33% de largura

  max-width: 1128px;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      min-width: 90px;
      min-height: 100%;

      cursor: pointer;

      color: var(--color-button-nav);

      transition: color 0.2s ease;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        color: var(--color-black);
      }

      &.active {
        color: var(--color-black);
        border-bottom: 2px solid var(--color-black);
      }
    }
  }
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const generalIconCSS = css`
  height: 24px;
  width: 24px;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  height: 38px;
  width: 38px;

  color: var(--color-linkedin);

  cursor: pointer;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const NotificationsIcon = styled(IoMdNotifications)`
  ${generalIconCSS};
`;

export const CaretDownIcon = styled(AiOutlineCaretDown)`
  height: 16px;
  width: 16px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS};
`;
