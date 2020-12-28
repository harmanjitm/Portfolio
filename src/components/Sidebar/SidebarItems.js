import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Link as RouterScroll } from 'react-scroll'

export const SidebarWrapper = styled.div`
  color: white;
`

export const SidebarLink = styled(RouterScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &::hover {
    color: #e63946;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarButton = styled(RouterLink)`
  border-radius: 30px;
  background: #e63946;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &::hover {
    transition: 0.2s ease-in-out;
    background: grey;
    color: white;
  }
`

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: darkgrey;
  align-items: center;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`

export const SidebarIconClose = styled(FaTimes)`
  color: white;
`

export const SidebarIcon = styled.div`
  position: absolute;
  top: 18px;
  right: 22px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 70px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 50px);
  }
`