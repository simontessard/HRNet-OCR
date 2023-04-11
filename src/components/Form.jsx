import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
const StyledInput = styled.input`
  border-radius: 5px;
  padding: 5px;
`
const SubmitButton = styled.input`
  background-image: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
  font-weight: 800;
  color: white;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  border: 0;
  margin-top: 1rem;
`

function Form() {
  return (
    <StyledForm>
      <label>First Name</label>
      <StyledInput type="text" name="firstName" />
      <label>Last Name</label>
      <StyledInput type="text" name="lastName" />
      <SubmitButton type="submit" value="Save" />
    </StyledForm>
  )
}

export default Form
