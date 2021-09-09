import React from 'react';
import styled from 'styled-components';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Button from "../../layout/components/button";

const HeaderBackground = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  
  width: 100vw;
  height: 100%;
  
  background: rgb(42,52,67);
  background: -moz-radial-gradient(circle, rgba(42,52,67,1) 0%, rgba(32,40,51,1) 100%);
  background: -webkit-radial-gradient(circle, rgba(42,52,67,1) 0%, rgba(32,40,51,1) 100%);
  background: radial-gradient(circle, rgba(42,52,67,1) 0%, rgba(32,40,51,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2a3443",endColorstr="#202833",GradientType=1);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  width: 60%;
  height: 60%;
`;

const TextMain = styled.p`
  font-size: var(--headerTextSize);
  font-weight: bold;
`;

const TextMini = styled.p`
  font-size: var(--miniTextSize);
  color: var(--highlightedTextColor);
`;

const Description = styled.p`
  font-size: var(--mainTextSize);
  
  max-width: 500px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  font-size: 4em;

  width: 40%;
  height: 60%;
`;

const Index = () => {
    return (
        <Container height="550px">
            <HeaderBackground>
                <ContentContainer>
                    <HeaderContainer>

                        <TextContainer>
                            <TextMini>
                                FRONTEND || BACKEND || FULLSTACK
                            </TextMini>
                            <TextMain>
                                Łukasz Gronczakiewicz
                            </TextMain>

                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Description>
                            <Button>Dowiedz się więcej!</Button>
                        </TextContainer>

                        <Logo>
                            Placeholder
                        </Logo>
                    </HeaderContainer>
                </ContentContainer>
            </HeaderBackground>
        </Container>
    );
};

export default Index;