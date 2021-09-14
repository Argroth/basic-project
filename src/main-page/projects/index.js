import React, {Component} from 'react';
import styled from 'styled-components';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Title from "../../layout/components/title";

import ProjectCard from "./project-card";
import ProjectCardEmpty from './project-card-empty';

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

const data = [
    {
        title: "K.N.U.R",
        tags: ["Electron", "JavaScript", "HTML", "Python", "Pypsexec"]
    },
    {
        title: "Prawnyregulamin.pl",
        tags: ["React + Redux", "MVC", "FullStack", "Node", "Express"]
    }
]

const Tag = styled.div`
  width: 50px;
  height: 20px;
`;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: false,
            searchedTag: ""
        }
    }

    SortList = (param) => {
        console.log(param)
        this.setState({searchedTag: param})
    }

    render() {
        return (
            <Container height="100%">
                <ContentContainer>
                    <DescriptionContainer>
                        <Title>.projects( )</Title>
                    </DescriptionContainer>
                    <Tag onClick={() => this.setState({sort: false})}>Reset</Tag>
                    <Tag onClick={() => this.setState({sort: true}, this.SortList("Express"))}>Express</Tag>
                    <Tag onClick={() => this.setState({sort: true}, this.SortList("MVC"))}>MVC</Tag>

                    <ProjectsContainer>
                        {this.state.sort === false?
                                data.map(project => {
                                    return(
                                        <ProjectCard data={project}/>
                                    )
                                })
                            :
                                data.map(project => {
                                    project.tags.map(tag => {
                                        console.log(project)
                                      if(tag === "MVC"){
                                          return(
                                              <ProjectCard data={project} />
                                          )
                                      }
                                    })
                                })
                        }
                    </ProjectsContainer>
                </ContentContainer>
            </Container>
        );
    }
}

export default Index;