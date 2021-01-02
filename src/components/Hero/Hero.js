import React from 'react'
import Particles from 'react-tsparticles'
import {HeroContainer} from './HeroItems'

const Hero = ({height, width}) => {
  return (
    <HeroContainer>
      <Particles height={height} width={width}
        id="particles"
        options={{
          background: {
            color: {
              value: "#08090C",
            },
            size: 10,
          },
          backgroundMode: {
            enable: false,
            zIndex: -1
          },
          fpsLimit: 90,
          interactivity: {
            detectsOn: "window",
            events: {
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
              value: "#e63946",
            },
            links: {
              color: "#e63946",
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
              outMode: "",
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
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </HeroContainer>
  )
}

export default Hero