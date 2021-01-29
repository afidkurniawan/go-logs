import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #F4F4FF;
    color: #111111;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  
  .main-content{
    top: 10%;
    width: auto;
    margin-left: 17rem;
    position: relative;
    padding: 0 4rem;
  }

  .panel-container{
    display:flex;
    background: #FFFFFF;
    border-radius: 20px;
  }

  .panel-container-title{
    display:flex;
    color: rgba(17, 17, 17, 0.5);
    font-size: 16px;
    padding-top:15px;
    padding-left:15px;
  }

  p,
  label {
    font-family:  'Raleway', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  a{
    text-decoration:none;
    color: #111111;
  }
`;
