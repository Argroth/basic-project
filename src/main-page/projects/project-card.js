import React from 'react';
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  
  width: 240px;
  height: 300px;
  
  margin-bottom: 30px;
  
  background-color: red;
`;

const PhotoContainer = styled.div`
  width: 100%;
  height: 60%;
  
  background-color: gray;
`;

const ProjectCard = () => {
    return (
        <ProjectCardContainer>
            <PhotoContainer />
            Project Card
        </ProjectCardContainer>
    );
};

export default ProjectCard;