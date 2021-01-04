import React from 'react'
import Particles from 'react-tsparticles'
import { 
  Column1, 
  Column2, 
  Heading, 
  SectionRow, 
  SectionWrapper, 
  Subtitle, 
  TextWrapper
} from '../Section/SectionItems'
import {HeroContainer} from './HeroItems'

const Hero = ({height, width}) => {
  return (
    <HeroContainer>
      <Particles height={height} width={width}
        options={{
          background: {
            color: {
              value: "#08090C",
            },
          },
          backgroundMode: {
            enable: true,
            zIndex: -1
          },
          fpsLimit: 90,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                parallax: {
                  enable: true,
                  force: 25,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 1,
                opacity: 0.02,
                size: 10,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              outMode: "out",
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "line",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {/* Need to center and create new components for this*/}
        <SectionWrapper height={height}>
          <SectionRow>
            <Column1>
              <TextWrapper>
                <Heading>Name</Heading>
                <Subtitle>Subtitle
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading>
                  Text
                </Heading>
              </TextWrapper>
            </Column2>
          </SectionRow>
        </SectionWrapper>
    </HeroContainer>
  )
}

export default Hero
