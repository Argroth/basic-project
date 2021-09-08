import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: ${props => props.height};
`;

const Container = (props) => {
    return (
        <StyledContainer height={props.height}>
            {props.children}
        </StyledContainer>
    );
};

export default Container;