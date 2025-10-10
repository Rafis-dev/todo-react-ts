import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`;

export const ThemeHeaderBtn = styled.button<{ icon: string }>`
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  box-shadow: none;
  background-image: url(${props => props.icon});
  cursor: pointer;
`;
