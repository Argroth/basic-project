import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  margin: 1em 0.8em;
  color: ${props=> props.reversed === true? "#0A8474" : "white"};
  transition: 1s;

  &:hover{
    background-color: #00293F;
    color: ${props=> props.reversed === true? "white" : "#0A8474"};
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
    border-bottom-color: #0A8474;
    border-right-color: #0A8474;
  }

  &::before{
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #0A8474;
    border-left-color: #0A8474;
  }

  &:hover:after,
  &:hover:before{
    width: 100%;
    height: 100%;
  }
`;

const Button = () => {
    return (
        <Container>
            Asdf
        </Container>
    );
};

export default Button;