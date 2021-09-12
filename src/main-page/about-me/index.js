import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/all';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Title from "../../layout/components/title";

const AboutMeBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100vw;
  height: 100%;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  width: 60%;
  height: 100%;
`;

const PhotoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width: 210px;
`;

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 200px;
  height: 200px;
  border: solid 4px;
  border-color: var(--primaryBackground);
  box-shadow: 0px 0px 0px 3px var(--highlightedTextColor);
  border-radius: 100px;
  
  background-color: gray;
`;

const TextMain = styled.p`
  font-size: var(--mainTextSize);
  font-weight: bold;
  
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  width: 100px;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 20px;
  height: 20px;
  
  font-size: 1.4em;
  color: var(--highlightedTextColor);
  transition: 0.2s;
  
  &:hover{
    cursor: pointer;
    color: var(--primaryTextColor);
    transition: 0.2s;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  width: 40%;
`;

const MainText = styled.p`
  margin-top: 40px;
  font-size: var(--mainTextSize);
`;

const Description = styled.p`
  margin-top: 40px;
  font-size: var(--mainTextSize);
`;

const Index = () => {
    return (
        <Container height="500px">
            <AboutMeBackground>
                <ContentContainer>
                    <PhotoContainer>
                        <PhotoContent>
                            <Photo />
                            <TextMain>Łukasz Gronczakiewicz</TextMain>
                            <SocialsContainer>
                                <Social><FaFacebookSquare /></Social>
                                <Social><FaGithubSquare /></Social>
                                <Social><FaLinkedin /></Social>
                            </SocialsContainer>
                        </PhotoContent>
                    </PhotoContainer>

                    <TextContainer>
                        <Title>
                            .aboutMe( )
                        </Title>

                        <MainText>
                            Trochę dłuższy opis opisu poniżej xd
                        </MainText>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Description>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Description>
                    </TextContainer>
                </ContentContainer>
            </AboutMeBackground>
        </Container>
    );
};

export default Index;