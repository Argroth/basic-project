import React from 'react';
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 240px;
  height: 300px;
`;

const ProjectCardEmpty = () => {
    return (
        <ProjectCardContainer>

        </ProjectCardContainer>
    );
};

export default ProjectCardEmpty;