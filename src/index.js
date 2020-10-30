import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../src/pages/Home'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    background-color: #eee;
  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment> , document.getElementById('root'))
