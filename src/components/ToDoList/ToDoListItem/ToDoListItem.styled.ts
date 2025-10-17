import styled from 'styled-components';

export const ToDoItemWrapper = styled.li`
  width: 100%;
  min-height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  line-height: 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.1);
  margin: 0 0 10px 0;
  padding: 6px;
  word-break: break-word;
  &:last-child {
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
    min-height: 40px;
  }
`;

export const ToDoItemControls = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    height: 20px;
    width: 128px;
  }
`;

export const ToDoItemText = styled.span`
  width: calc(100% - 150px);
  max-height: 66px;
  overflow-y: auto;

  @media (max-width: 480px) {
    max-height: 46px;
    width: calc(100% - 128px);
  }
`;

export const EditInput = styled.input`
  width: calc(100% - 150px);
  @media (max-width: 480px) {
    width: calc(100% - 128px);
  }
`;

export const ToDoItemButton = styled.button<{ icon: string }>`
  width: 50px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  background-image: url(${props => props.icon});
`;
