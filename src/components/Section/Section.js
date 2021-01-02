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
                <Title>Title</Title>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
              </TextWrapper>
            </Column1>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}

export default Section
