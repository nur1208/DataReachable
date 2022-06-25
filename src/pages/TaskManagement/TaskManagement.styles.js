import styled from "styled-components";

export const WrapperStyeld = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const InnerWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* height: 100vh;
  @media screen and (max-width: 650px) {
    height: 100%;
  } */
`;

export const DropInnerWrapper = styled.div`
  flex: 1 25%;
  width: 100%;
  height: 100%;
`;
