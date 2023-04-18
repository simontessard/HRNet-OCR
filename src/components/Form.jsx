import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { states, departments } from '../data/index.js'

import Employee from '../models/employee.js'

import { useDispatch } from 'react-redux'
import { addEmployee } from '../actions/employeeActions.js'

import { Modal } from 'modal-dialog-library'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 2rem;
  border-radius: 10px;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  .modal-overlay {
    z-index: 10;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 1rem;
  border: thin solid #ccc;
`

const SubmitButton = styled.input`
  background-color: green;
  color: white;
  border-radius: 5px;
  padding: 1.5rem 4rem;
  cursor: pointer;
  border: none;
  margin-top: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
`

const StyledDatePicker = styled(DatePicker)`
  padding: 1rem;
  border-radius: 5px;
  border: thin solid #ccc;
  width: 89%;
`

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 3rem;
  margin-top: 0.5rem;
  gap: 1rem;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex: 100%;
`

const ResetButton = styled(SubmitButton)`
  background-color: red;
`

function Form() {
  const dispatch = useDispatch()

  const firstName = useRef()
  const LastName = useRef()
  const [birthday, setBirthday] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const street = useRef()
  const city = useRef()
  const [state, setState] = useState(null)
  const zipCode = useRef()
  const [department, setDepartment] = useState(null)

  const [openModal, setOpenModal] = useState(false)

  const stateOptions = states.map((state) => ({
    label: state.name,
    value: state.abbreviation,
  }))

  const departmentOptions = departments.map((department) => ({
    label: department,
    value: department,
  }))

  const createEmployee = (e) => {
    e.preventDefault()
    dispatch(
      addEmployee(
        new Employee(
          firstName.current.value,
          LastName.current.value,
          birthday.toLocaleDateString('en-US'),
          startDate.toLocaleDateString('en-US'),
          department.value,
          street.current.value,
          city.current.value,
          state.label,
          zipCode.current.value
        )
      )
    )
    setOpenModal(!openModal)
  }

  const handleFormReset = (e) => {
    e.target.reset()
  }

  return (
    <StyledForm onSubmit={createEmployee} onReset={handleFormReset}>
      <Row>
        {openModal && (
          <Modal
            children={<p>Employee M. {LastName.current.value} was created</p>}
            titleText="Successful creation"
            isOpen={true}
            style={{ title: { fontSize: '20px' } }}
          />
        )}
        <Column>
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
          <label htmlFor="department">Department</label>
          <Dropdown options={departmentOptions} onChange={(value) => setDepartment(value)} />
        </Column>
        <StyledFieldset>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <StyledInput ref={street} id="street" type="text" required />
          <label htmlFor="city">City</label>
          <StyledInput ref={city} id="city" type="text" required />
          <label htmlFor="state">State</label>
          <Dropdown options={stateOptions} onChange={(value) => setState(value)} />
          <label htmlFor="zip-code">Zip Code</label>
          <StyledInput ref={zipCode} id="zip-code" type="number" required />
        </StyledFieldset>
      </Row>
      <ButtonsContainer>
        <ResetButton type="reset" value="Reset" /> <SubmitButton type="submit" value="Save" />
      </ButtonsContainer>
    </StyledForm>
  )
}

export default Form
