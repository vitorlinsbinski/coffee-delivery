import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;

        box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-subtitle']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        text-decoration: none;
        display: block;
    }

    ul {
        list-style: none;
    }

    button {
        display: block;
        outline: 0;
        border: none;
    }

    @keyframes FadeInDown {
        from {
            opacity: 0;
            transform: translateY(20px);
        } to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes FadeInRight {
        from {
            opacity: 0;
            transform: translateX(40px);
        } to {
            opacity: 1;
            transform: translateX(0);
        }
    }

`;
