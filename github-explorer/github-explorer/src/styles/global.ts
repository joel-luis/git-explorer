import { createGlobalStyle } from 'styled-components';
import background from '../assets/bg.svg';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}

body{
    background: #FAFAF5 url(${background}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-size: 16px;
    font-family: Roboto, sans-serif

}
#root {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
}


`;