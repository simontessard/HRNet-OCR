import styled from 'styled-components'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
const StyledInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  border-width: thin;
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

const StyledDatePicker = styled(DatePicker)`
  padding: 10px;
  border-radius: 5px;
  border-width: thin;
`

function Form() {
  const [birthday, setBirthday] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())

  return (
    <StyledForm>
      <label>First Name</label>
      <StyledInput type="text" name="firstName" />
      <label>Last Name</label>
      <StyledInput type="text" name="lastName" />
      <label>Birthday</label>
      <StyledDatePicker
        showMonthDropdown
        showYearDropdown
        selected={birthday}
        onChange={(date) => setBirthday(date)}
        required
      />
      <label>Start date</label>
      <StyledDatePicker
        showMonthDropdown
        showYearDropdown
        todayButton="Today"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        required
      />
      <SubmitButton type="submit" value="Save" />
    </StyledForm>
  )
}

export default Form
