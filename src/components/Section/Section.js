import React from 'react'
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  TextWrapper,
  Title,
  Heading,
  Subtitle
} from './SectionItems'

const Section = ({ height }) => {
  return (
    <>
      <SectionContainer>
        <SectionWrapper height={height}>
          <SectionRow>
            <Column1>
              <TextWrapper>
                <Title>About Me</Title>
                <Heading>Heading</Heading>
                <Subtitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Subtitle>
              </TextWrapper>
            </Column1>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}

export default Section
