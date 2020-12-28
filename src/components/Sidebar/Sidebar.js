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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarIcon>
        <SidebarIconClose/>
      </SidebarIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About Me</SidebarLink>
          <SidebarLink to="about">Projects</SidebarLink>
          <SidebarLink to="about">Contact</SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrapper>
          <SidebarButton to={{ pathname: 'https://github.com/harmanjitm' }} target='_blank'>GitHub</SidebarButton>
        </SidebarButtonWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
