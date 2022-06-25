import styled from "styled-components";

export const ItemWrapperStyled = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  padding: 20px 10px 10px 10px;
  border-radius: 5px;
  z-index: 1;
  background-color: white;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  &:hover {
    cursor: grab;
  }
`;

export const CloseBtnStyeld = styled.button`
  position: absolute;
  bottom: 27px;
  right: -9px;
  border: none;
  color: red;
`;

export const InputTaskWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
  }
`;
