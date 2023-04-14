import styled from 'styled-components'
import { FaListAlt } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

const StyledButton = styled.button`
  background-color: #02aab0;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  max-width: fit-content;
`

const StyledContainer = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`

const StyledParagraph = styled.p`
  margin: 0;
  margin-left: 0.5rem;
`

function ButtonCurrentEmployee() {
  return (
    <StyledButton>
      <StyledContainer to="/employees">
        <FaListAlt />
        <StyledParagraph> List of registered employees </StyledParagraph>
      </StyledContainer>
    </StyledButton>
  )
}

export default ButtonCurrentEmployee
