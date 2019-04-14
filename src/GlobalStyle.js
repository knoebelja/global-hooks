import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    color: 'white';
    font-family: Arial;
    font-size: 16px;
  }
  
  div {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    margin: 12px;
    padding: 12px;
    color: blue;

    &:hover, &:focus{
      color: red;
      outline: none;
      text-decoration: underline;
    }
    &:active {
      color: blue;
    }
  }

  p {
    margin: 8px;
    padding: 8px;
  }

  button {
    margin: 8px;
    padding: 8px;
    font-size: 16px;
    color: grey;
    border: 2px solid white;
    border-radius: 8px;
    &:hover, &:focus {
      border: 2px solid lightgrey;
      outline: none;
    }
    &:active {
      color: grey;
      background-color: grey;
      border: 2px solid white;
    }
    transition: border 0.5s ease;
  }

  form {
    margin: 8px;
    padding: 8px;
  }

  input {
    margin: 8px;
    padding: 8px;
    color: grey;
    font-size: 16px;
    border: 2px solid grey;
    border-radius: 8px;
    &:hover, &:focus {
      color: black;
      border: 2px solid black;
      outline: none;
    }
    transition: all 0.5s ease;
  }

  label {
    margin: 8px;
    padding: 8px;
  }
`;

export default GlobalStyle;
