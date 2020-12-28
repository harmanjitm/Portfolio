import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link as RouterScroll } from 'react-scroll'

export const Nav = styled.nav`
  background: black;
  height: 60px;
  /* margin-top: -100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(RouterLink)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const NavMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    margin-top: -4px;
    font-size: 28px;
    cursor: pointer;
    color: white;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 60px;
`

export const NavLinks = styled(RouterScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 2px solid #e63946;
  }
`

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavButtonLink = styled(RouterLink)`
  border-radius: 50px;
  background: #e63946;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: grey;
    color: white;
  }
`