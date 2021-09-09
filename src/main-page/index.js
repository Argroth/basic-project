import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

//import layout components
import Navbar from "../layout/navbar";

//imports main components
import Header from './header/index';
import AboutMe from './about-me/index';
import Skills from './skills/index';

const GlobalStyles = createGlobalStyle`
  
  
    :root{
        --primaryBackground: #202833;
        --secondaryBackground: #2a3443;
      
        --primaryTextColor: #FBFBFB;
        --highlightedTextColor: #52b7b5;
      
        --headerTextSize: 2em;
        --mainTextSize: 1.1em;
        --miniTextSize: 0.8em;
        --titleSize: 1.4em;
      
        --minWidth: 150px;
        --maxWidth: 1920px;
    }
    
    
  @import url('https://fonts.googleapis.com/css2?family=Roboto');
  
    body{
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
        color: var(--primaryTextColor);
    }
    *{
        scroll-behavior: smooth;
    }
    &::-webkit-scrollbar {
        width: 10px;
        background: var(--primaryTextColor);
    }
    &::-webkit-scrollbar-thumb {
        background: var(--highlightedTextColor);
        border-radius: 10px;
        padding-top: 3200px;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: #0A8474;
      -webkit-box-shadow: 0 0 0 30px var(--primaryTextColor) inset !important;
}
`;

const Container = styled.div`
    background-color: var(--primaryBackground);
    position: relative;
`;

class Index extends Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <Navbar />

                <Header />
                <AboutMe />
                <Skills />
            </Container>
        );
    }
}

export default Index;