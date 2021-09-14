import React from 'react';
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 240px;
  height: 300px;

  border: 2px solid var(--highlightedTextColor);
  border-radius: 10px;
  
  margin-bottom: 30px;

  transition: 0.2s;
  
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    
    transform: scale(115%);
  }

  &:last-child{
     !important;
  }
`;

const PhotoContainer = styled.div`
  width: 100%;
  height: 150px;
  
  border-radius: 7px 7px 0 0;
  
  background-color: gray;
`;

const CardTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--primaryTextColor);
  font-size: var(--mainTextSize);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  
  width: 240px;
  height: 100px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--highlightedTextColor);
  font-size: var(--miniTextSize);
  
  height: 15px;
  padding: 3px;
  margin-left: 10px;
  
  border: 2px solid var(--highlightedTextColor);
  border-radius: 7px;

  transition: 0.2s;
  
  &:hover {
    cursor: pointer;
    transition: 0.2s;

    color: var(--primaryTextColor);
    border: 2px solid var(--primaryTextColor);
  }
`;

const ProjectCard = (props) => {
    return (
        <ProjectCardContainer>
            <PhotoContainer />
            <CardTitle>{props.data.title}</CardTitle>
            <Tags>
                {props.data.tags.map(tag => {
                    return(
                        <Tag>{tag}</Tag>
                    )
                })}
            </Tags>
        </ProjectCardContainer>
    );
};

export default ProjectCard;