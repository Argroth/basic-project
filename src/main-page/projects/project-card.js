import React from 'react';
import styled from "styled-components";

import Button from "../../layout/components/button";

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 240px;
  height: 300px;
  margin-bottom: 30px;

  border: 2px solid var(--highlightedTextColor);
  border-radius: 10px;

  transition: 0.2s;
  
  overflow-y: hidden;
  
  &:hover {
    cursor: pointer;
    transition: all 0.2s;
    height: 580px;
  }

  &:last-child{
     !important;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  height: 580px;
`;

const PhotoContainer = styled.div`
  width: 240px;
  height: 140px;
  
  border-radius: 7px 7px 0 0;
  
  background-color: gray;
`;

const CardTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  color: var(--primaryTextColor);
  font-size: var(--mainTextSize);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  
  width: 240px;
  height: 80px;
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

const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 95%;
  margin-top: 25px;
  
  text-align: center;
`;

const ProjectCard = (props) => {
    return (
        <ProjectCardContainer>
            <CardContent>
                <PhotoContainer />
                <CardTitle>{props.data.title}</CardTitle>
                <Tags>
                    {props.data.tags.map(tag => {
                        return(
                            <Tag>{tag}</Tag>
                        )
                    })}
                </Tags>

                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Description>

                <Button width="150px">Sprawdź!</Button>
            </CardContent>
        </ProjectCardContainer>
    );
};

export default ProjectCard;