import { createGlobalStyle } from 'styled-components'

import GothamBlack from './fontes/Gotham-Black.otf'
import GothamLight from './fontes/Gotham-Light.otf'
import GothamThin from './fontes/Gotham-Thin.otf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GothamBlack';
        src: local('Gotham Black'), local('GothamBlack'), url(${GothamBlack});
    }
    @font-face {
        font-family: 'GothamLight';
        src: local('Gotham Light'), local('GothamLight'), url(${GothamLight});
    }
    @font-face {
        font-family: 'GothamThin';
        src: local('Gotham Thin'), local('GothamThin'), url(${GothamThin});
    }
    body {
        margin: 0; 
        height: 100vh; 
        background: linear-gradient(to right, black 60%, grey 60%); 
    }
`

export default GlobalStyle