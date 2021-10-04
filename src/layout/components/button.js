import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  width: ${props=> props.width? props.height : "250px"};
  margin-top: 30px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  color: ${props=> props.reversed === true? "var(--highlightedTextColor)" : "var(--primaryTextColor)"};
  transition: 1s;

  &:hover{
    background-color: var(--primaryBackground);
    color: ${props=> props.reversed === true? "var(--primaryTextColor)" : "var(--highlightedTextColor)"};
    transition: 1s;
  }

  &::after,
  &::before{
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  &::after{
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: var(--highlightedTextColor);
    border-right-color: var(--highlightedTextColor);
  }

  &::before{
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: var(--highlightedTextColor);
    border-left-color: var(--highlightedTextColor);
  }

  &:hover:after,
  &:hover:before{
    width: 100%;
    height: 100%;
  }
`;

const Button = (props) => {
    return (
        <Container width={props.width}>
            {props.children}
        </Container>
    );
};

export default Button;