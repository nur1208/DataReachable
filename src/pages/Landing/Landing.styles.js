import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainLadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StartApp = styled(Link)`
  border-radius: 27%;
  padding: 10px;
  font-size: 40px;
  border: 0.5rem solid;
  background-color: #dcdcdc;
`;
