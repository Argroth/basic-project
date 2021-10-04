import React, {Component} from 'react';
import styled from 'styled-components';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Title from "../../layout/components/title";

import ProjectCard from "./project-card";
import ProjectCardEmpty from './project-card-empty';

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 30%;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
  width: 70%;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
`;

const Tag = styled.div`
  //border: 2px solid var(--highlightedTextColor);
  border: ${props=> props.highlighted === true? "2px solid var(--highlightedTextColor)" : "2px solid gray"};
  border-radius: 7px;
  color: ${props=> props.highlighted === true? "var(--primaryTextColor)" : "gray"};
  font-size: var(--miniTextSize);
  
  padding: 3px;
  margin: 10px;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;

    color: var(--primaryTextColor);
    border: 2px solid var(--primaryTextColor);
  }
`;

const data = [
    {
        title: "K.N.U.R",
        tags: ["Electron", "JavaScript", "HTML", "Python", "Pypsexec"]
    },
    {
        title: "Prawnyregulamin.pl",
        tags: ["React + Redux", "C++", "FullStack", "Node", "Express"]
    },
    {
        title: "K.N.U.R",
        tags: ["Electron", "JavaScript", "CSS", "Python", "Pypsexec"]
    },
    {
        title: "Prawnyregulamin.pl",
        tags: ["React + Redux", "MVC", "MongoDB", "Node", "Express"]
    },
    {
        title: "Prawnyregulamin.pl",
        tags: ["React + Redux", "MVC", "MongoDB", "Node", "Express"]
    }
]

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: false,
            searchedTag: "",
            uniqueTags: [],
            highlightedTags: []
        }
    }

    componentDidMount() {
        let tagsArray = [];
        // eslint-disable-next-line array-callback-return
        data.map(project => {
            // eslint-disable-next-line array-callback-return
           project.tags.map(tag => {
               tagsArray.push(tag);
           })
        })
        let uniqueTags = [...new Set(tagsArray)];
        this.setState({uniqueTags: uniqueTags, highlightedTags: uniqueTags});
    }


    SortList = (param) => {
        this.setState({searchedTag: param, highlightedTags: []})
    }

    HighlightTags = (param) => {
        param.tags.forEach(tag => {
            if(this.state.highlightedTags.indexOf(tag) === -1){
                this.setState({highlightedTags: [...this.state.highlightedTags, tag]});
            }
        })
    }

    render() {
        return (
            <Container height="100%">
                <ContentContainer>
                    <DescriptionContainer>
                        <Title>.projects( )</Title>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <TagsContainer>
                            <Tag highlighted={true} onClick={() => this.setState({sort: false, highlightedTags: this.state.uniqueTags})}>Wszystkie projekty</Tag>
                            {this.state.uniqueTags.length > 0?

                                this.state.uniqueTags.map(tag => {

                                    if(this.state.highlightedTags.indexOf(tag) !== -1){
                                        return(
                                            <Tag highlighted={true} onClick={() => { this.setState({sort: true}); this.SortList(`${tag}`)}}>{tag}</Tag>
                                        )
                                    }

                                    return(
                                            <Tag highlighted={false} onClick={() => { this.setState({sort: true}); this.SortList(`${tag}`)}}>{tag}</Tag>
                                        )
                                })
                                :
                                ""
                            }
                        </TagsContainer>
                    </DescriptionContainer>

                    <ProjectsContainer>
                        {this.state.sort === false? //return all projects
                                data.map(project => {
                                    return(
                                        <ProjectCard data={project}/>
                                    )
                                })
                            :
                                data.map(project => {
                                    return( //return all projects with selected tag
                                        // eslint-disable-next-line array-callback-return
                                        project.tags.map(tag => {
                                            if(tag === this.state.searchedTag){

                                                this.HighlightTags(project);

                                                return(
                                                    <ProjectCard data={project}/>
                                                )
                                            }
                                        })
                                    )
                                })
                        }
                    </ProjectsContainer>
                </ContentContainer>
            </Container>
        );
    }
}

export default Index;