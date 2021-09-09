import React from 'react';
import styled from 'styled-components';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Title from "../../layout/components/title";

const AboutMeBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  
  width: 90%;
  height: 100%;
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width: 30%;
  height: 100%;
`;

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 200px;
  height: 200px;
  border: solid 2px;
  border-color: var(--primaryBackground);
  outline: 3px solid var(--highlightedTextColor);
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
  
  background-color: var(--highlightedTextColor);
`;

const Index = () => {
    return (
        <Container height="500px">
            <AboutMeBackground>
                <Title>
                    .aboutMe( )
                </Title>
                <ContentContainer>
                    <PhotoContainer>
                        <Photo />
                        <TextMain>Łukasz Gronczakiewicz</TextMain>
                        <SocialsContainer>
                            <Social />
                            <Social />
                            <Social />
                        </SocialsContainer>
                    </PhotoContainer>
                </ContentContainer>
            </AboutMeBackground>
        </Container>
    );
};

export default Index;