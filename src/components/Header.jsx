import styled from 'styled-components'
import { FaUserTie } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.75rem;
  padding: 0.5rem;
`

const StyledHFaUserTie = styled(FaUserTie)`
  font-size: 2rem;
  background-color: #52c0db;
  border-radius: 25px;
  margin-right: 0.75rem;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`

function Header() {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <StyledHFaUserTie />
        HRNet
      </StyledNavLink>
    </StyledHeader>
  )
}

export default Header
