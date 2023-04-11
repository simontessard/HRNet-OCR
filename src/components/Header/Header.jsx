import styled from 'styled-components'
import { FaUserTie } from 'react-icons/fa'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  padding: 2rem;
  gap: 0.75rem;
`

const StyledHFaUserTie = styled(FaUserTie)`
  font-size: 2rem;
  background-color: #52c0db;
  border-radius: 25px;
`

function Header() {
  return (
    <StyledHeader>
      <StyledHFaUserTie />
      HRNet
    </StyledHeader>
  )
}

export default Header
