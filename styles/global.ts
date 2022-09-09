import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    background-color: #EDEDED;
    color:  ${(props) => theme.colors.text};

    font-family: 'Poppins', cursive;
  }

`