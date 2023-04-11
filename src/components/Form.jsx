import styled from 'styled-components'
import React, { useState, useRef } from 'react'
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
  width: 92%;
`
const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 30px;
  margin-top: 0.5rem;
  gap: 10px;
`

const StyledSelect = styled.select`
  border-radius: 5px;
  padding: 10px;
  border-width: thin;
`

function Form() {
  const firstName = useRef()
  const LastName = useRef()
  const [birthday, setBirthday] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const street = useRef()
  const city = useRef()
  const [state, setState] = useState(null)
  const zipCode = useRef()

  const createEmployee = (e) => {
    e.preventDefault()
  }

  return (
    <StyledForm onSubmit={createEmployee}>
      <label>First Name</label>
      <StyledInput ref={firstName} type="text" id="firstName" required />
      <label>Last Name</label>
      <StyledInput ref={LastName} type="text" id="lastName" required />
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
      <StyledFieldset>
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <StyledInput ref={street} id="street" type="text" required />
        <label htmlFor="city">City</label>
        <StyledInput ref={city} id="city" type="text" required />
        <label htmlFor="state">State</label>
        <StyledSelect name="state" id="state" required></StyledSelect>
        <label htmlFor="zip-code">Zip Code</label>
        <StyledInput ref={zipCode} id="zip-code" type="number" required />
      </StyledFieldset>
      <SubmitButton type="submit" value="Save" />
    </StyledForm>
  )
}

export default Form
