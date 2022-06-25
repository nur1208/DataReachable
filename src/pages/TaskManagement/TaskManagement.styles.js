import styled from "styled-components";
const BACKGROUND_COLOR = "#f5eaea";
const PRIMARY_COLOR = "rgb(62, 100, 255)";
export const AddTaskBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddTaskBtn = styled.button`
  border-radius: 50%;
  padding: 5px;
  margin-top: 10px;
`;

export const DropInnerWrapper = styled.div`
  flex: 1 25%;
  width: 100%;
  height: 100%;
`;
export const DropMainWrapper = styled.div`
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
