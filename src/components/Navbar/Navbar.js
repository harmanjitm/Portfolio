import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
	Nav, 
	NavContainer, 
	NavLogo, 
	NavMenuIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
	NavButton,
	NavButtonLink 
} from './NavbarItems'

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavContainer>
					<NavLogo to="/">HM</NavLogo>
					<NavMenuIcon onClick={toggle} >
						<FaBars />
					</NavMenuIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='about'>About Me</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='projects'>Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='contact'>Contact</NavLinks>
						</NavItem>
					</NavMenu>
					<NavButton>
						<NavButtonLink to={{ pathname: 'https://github.com/harmanjitm' }} target='_blank'>GitHub</NavButtonLink>
					</NavButton>
				</NavContainer>
			</Nav>
		</>
	)
}

export default Navbar
