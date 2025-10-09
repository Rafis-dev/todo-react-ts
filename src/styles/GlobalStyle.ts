import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
  box-sizing: border-box;
}

body {
  background-color: #edf0f1;
  padding: 50px 0 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.429;
  color: black;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

.checked {
  filter: brightness(85%);
  text-decoration: line-through;
}

.link {
  text-decoration: none;
  padding: 10px;
  color: #fff;
}

.active {
  color: #c4bfbf;
  text-decoration: underline;
}

.list-link {
  text-decoration: none;
  padding: 10px;
}

.done {
  color: green;
}

.notDone {
  color: red;
}

.img-error {
  width: 300px;
}
`;
