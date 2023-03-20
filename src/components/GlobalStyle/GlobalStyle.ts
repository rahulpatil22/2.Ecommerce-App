// import { createGlobalStyle, withTheme } from 'styled-components';
// import { ThemeProps } from './theme';

// type GlobalThemeProps = {
//   theme: ThemeProps;
// };

// const globalStyle = createGlobalStyle`
//   :root {
//     //dark-mode
//     --dark-background: #1A1B27;
//     --dark-text: #F5F5F7;

//     //light-mode
//     --light-background: #f2f2f2;
//     --light-text: #2E0509;

//   }

//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     outline: 0;
//   }

//   body  {
//     -webkit-font-smoothing: antialiased;
//     height: 10vh;
//     width: 50vw;
//     margin: 0 auto;
//     background-color: ${({ theme }: GlobalThemeProps) => theme?.background};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   h1 {
//     font-size: 3.375rem;
//     color: ${({ theme }: GlobalThemeProps) => theme?.text};
//   }

// `;

// export default withTheme(globalStyle);

import {createGlobalStyle} from "styled-components"

 export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
 `
