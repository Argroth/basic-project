import React, {Component} from 'react';
import styled from 'styled-components';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Title from "../../layout/components/title";

import ProjectCard from "./project-card";

const DescriptionContainer = styled.div`
  width: 30%;
`;

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  
  width: 70%;
`;

class Index extends Component {
    render() {
        return (
            <Container height="100%">
                <ContentContainer>
                    <DescriptionContainer>
                        <Title>.projects( )</Title>
                    </DescriptionContainer>

                    <ProjectsContainer>
                        <ProjectCard>123</ProjectCard>
                        <ProjectCard>123</ProjectCard>
                        <ProjectCard>123</ProjectCard>
                        <ProjectCard>123</ProjectCard>
                        <ProjectCard>123</ProjectCard>
                        <ProjectCard>123</ProjectCard>
                        <ProjectCard>123</ProjectCard>
                    </ProjectsContainer>
                </ContentContainer>
            </Container>
        );
    }
}

export default Index;