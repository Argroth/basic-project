import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 13px;
  width: 13px;
  
  background: var(--highlightedTextColor);
  border: solid 2px;
  border-color: var(--primaryBackground);
  outline: 2px solid var(--highlightedTextColor);
`;

const Decorator = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Decorator;