import React from 'react';
import styled from 'styled-components';

import Container from "./components/container";
import ContentContainer from "./components/contentContainer";

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    
  width: 200px;
  height: 75px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
    
  width: 100%;
`;

const ParenthesesSpan = styled.span`
  &:hover{
    color: var(--highlightedTextColor);
  }
`;

const NavItem = styled.div`
  display: inline-block;
  position: relative;

  margin-left: 20px;
  font-size: var(--mainTextSize);
  
  &:hover{
    cursor: pointer;
  }
  
  &:hover ${ParenthesesSpan} {
    color: var(--highlightedTextColor);
    transition: 0.2s;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 20%;
    transform: scaleX(0);
    height: 4px;
    bottom: -4px;
    left: 0;
    background-color: var(--highlightedTextColor);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Navbar = () => {
    return (
        <Container>
            <ContentContainer>
                <Logo>
                    Łukasz Gronczakiewicz
                </Logo>

                <NavItems>
                    <NavItem>.home<ParenthesesSpan>( )</ParenthesesSpan></NavItem>
                    <NavItem>.aboutMe<ParenthesesSpan>( )</ParenthesesSpan></NavItem>
                    <NavItem>.projects<ParenthesesSpan>( )</ParenthesesSpan></NavItem>
                    <NavItem>.contact<ParenthesesSpan>( )</ParenthesesSpan></NavItem>
                </NavItems>
            </ContentContainer>
        </Container>
    );
};

export default Navbar;