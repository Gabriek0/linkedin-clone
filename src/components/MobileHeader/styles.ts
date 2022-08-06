import styled from "styled-components";

import { FiMessageSquare } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;

  height: 3rem;
  padding: 0 1rem;

  background: var(--color-link);

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  height: 28px;
  width: 28px;

  border-radius: 50%;

  border: 2px solid var(--color-icons);
`;

export const SearchInput = styled.input`
  margin-left: 1rem;
  width: 100%;

  background: var(--color-input);
  color: var(--color-black);

  font-size: 0.9rem;

  padding: 7.5px 8px;

  border: none;
  outline: none;

  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  height: 24px;
  width: 24px;

  color: var(--color-white);
  border-radius: 4px;

  flex-shrink: 0; // Capacidade de redução

  margin-left: 1rem;
`;
