import React from 'react'
import { 
  SidebarContainer,
  SidebarIcon,
  SidebarIconClose,
  SidebarWrapper,
  SidebarMenu,
  SidebarButton,
  SidebarButtonWrapper,
  SidebarLink
} from './SidebarItems'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarIcon onClick={toggle}>
        <SidebarIconClose/>
      </SidebarIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About Me</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrapper>
          <SidebarButton to={{ pathname: 'https://github.com/harmanjitm' }} target='_blank'>GitHub</SidebarButton>
        </SidebarButtonWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
