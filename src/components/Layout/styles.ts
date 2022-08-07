import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  main {
    margin-top: 3rem;

    .left-column,
    .right-column {
      display: none;
    }
  }

  @media (min-width: 1180px) {
    > main {
      display: flex;
      justify-content: center;
      margin: 0 30px;

      margin-top: 5rem;

      .left-column,
      .right-column {
        display: unset;
      }

      .middle-column {
        margin: 0 25px 16px;
      }
    }
  }
`;
