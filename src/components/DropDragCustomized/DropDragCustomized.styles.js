import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
} from "../../data/cssColor";

export const ColHeaderStyeld = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const AddTaskBtnWrapperStyeld = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddTaskBtnStyeld = styled.button`
  border-radius: 50%;
  padding: 5px;
  margin-top: 10px;
`;

export const DropMainWrapperStyeld = styled.div`
  ${({ isOver }) => {
    // debugger;
    return isOver && `border: 0.15rem solid ${PRIMARY_COLOR};`;
  }}

  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: ${BACKGROUND_COLOR};
  min-height: 400px;
  border-radius: 5px;
`;
