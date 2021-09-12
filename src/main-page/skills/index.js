import React from 'react';
import styled from 'styled-components';

import Container from "../../layout/components/container";
import ContentContainer from "../../layout/components/contentContainer";
import Title from "../../layout/components/title";
import Timeline from "./timeline";

const Index = () => {
    return (
        <Container height="500px">
            <ContentContainer>
                <Title>Skills and exp</Title>
                <Timeline />
            </ContentContainer>
        </Container>
    );
};

export default Index;