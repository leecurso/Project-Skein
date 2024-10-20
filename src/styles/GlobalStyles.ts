import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DungGeunMo';
    src: url('/src/assets/fonts/DungGeunMo.ttf') format('truetype');  // 폰트 경로 확인
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'DungGeunMo', sans-serif;  // 폰트 적용
    background-color: #F5F5EB; // 배경색 설정
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;