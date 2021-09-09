import React from 'react';
import styled from "styled-components";

import Decorator from "./decorator";

const Container = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 50px;
  
  font-size: var(--titleSize);
`;

const Title = (props) => {
    return (
        <Container>
            <Decorator />{props.children}
        </Container>
    );
};

export default Title;