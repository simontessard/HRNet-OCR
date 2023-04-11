import styled from 'styled-components'
import { FaEye } from 'react-icons/fa'

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledParagraph = styled.p`
  margin: 0;
  margin-left: 0.5rem;
`

function ButtonCurrentEmployee() {
  return (
    <StyledButton>
      <StyledContainer>
        <FaEye />
        <StyledParagraph> Current Employees</StyledParagraph>
      </StyledContainer>
    </StyledButton>
  )
}

export default ButtonCurrentEmployee
