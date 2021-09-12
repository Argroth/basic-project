import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  
  width: 400px;
  height: 150px;
  
  background: rgb(9,9,9);
  background: -moz-linear-gradient(0deg, rgba(9,9,9,0.28335084033613445) 8%, rgba(0,107,255,0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(9,9,9,0.28335084033613445) 8%, rgba(0,107,255,0) 100%);
  background: linear-gradient(0deg, rgba(9,9,9,0.28335084033613445) 8%, rgba(0,107,255,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#090909",endColorstr="#006bff",GradientType=1);
`;

const Axis = styled.div`
  width: 400px;
  height: 5px;
  background-color: gray;
  
  &:before{
    position: relative;
    left: -20px;
    bottom: 20px;
    height: 20px;
    width: 20px;
    content: "";
    display: block;
    background-color: gray;
  }
  
  &:after{
    position: relative;
    left: 94%;
    bottom: 30px;
    height: 20px;
    width: 20px;
    display: block;
    content: "";
    border-top: 4px solid blue;
    border-right: 4px solid blue;
    transform: rotateZ(45deg);
  }
`;

const Timeline = () => {
    return (
        <Container>
            <Axis />
        </Container>
    );
};

export default Timeline;