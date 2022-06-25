import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  @media screen and (max-width: 650px) {
    height: 100%;
  }
`;

export const DropInnerWrapper = styled.div`
  flex: 1 25%;
  width: 100%;
  height: 100%;
`;
