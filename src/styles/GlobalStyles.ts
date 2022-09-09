import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
    }

    body {
        font-family: 'Alata', sans-serif;
        /* font-family: 'Alata', sans-serif; */
    }
    
    h1, h2, h3, h4, p {
        line-height: 150%;
    }

    button {
        cursor: pointer;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        } //15px
        @media (max-width: 720px){
            font-size: 87.5%;
        } //14px
    }
`;