import React from 'react'
import StyledNav from '@/components/StyledNavbar';

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const navItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  }
]

const Navbar = ({children} : Props) => {
  return (
    <StyledNav navItems={navItems}>
      {children}
    </StyledNav>
  )
}

export default Navbar;