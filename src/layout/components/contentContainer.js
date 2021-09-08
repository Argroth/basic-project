import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  
  max-width: var(--maxWidth);
  
  //background-color: var(--secondaryBackground);
`;

const ContentContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default ContentContainer;