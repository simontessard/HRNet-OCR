import React, { useState, useRef, lazy, Suspense } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import 'react-dropdown/style.css'
import { states, departments } from '../../data/index.js'

import Employee from '../../models/employee.js'

import { useDispatch } from 'react-redux'
import { addEmployee } from '../../actions/employeeActions.js'

import { Modal } from 'modal-dialog-library'

import './form.css'

const DatePicker = lazy(() => import('react-datepicker'))
const Dropdown = lazy(() => import('react-dropdown'))

function Form() {
  const dispatch = useDispatch()

  const firstName = useRef(null)
  const LastName = useRef(null)
  const [birthday, setBirthday] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const street = useRef(null)
  const city = useRef(null)
  const [state, setState] = useState(null)
  const zipCode = useRef(null)
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
    setBirthday(null)
    setStartDate(null)
  }

  return (
    <form onSubmit={createEmployee} onReset={handleFormReset}>
      <div className="form-row">
        <Modal
          isOpen={openModal}
          titleText="SUCCESS"
          style={{ title: { fontSize: '20px' }, closeContainer: { display: 'none' } }}
        >
          {openModal && (
            <>
              <p>Employee M. {LastName.current.value} was created !</p>
              <button className="button-close-modal" onClick={() => setOpenModal(false)}>
                Close
              </button>
            </>
          )}
        </Modal>
        <div className="form-column">
          <label htmlFor="firstName">First Name</label>
          <input ref={firstName} type="text" id="firstName" required />
          <label htmlFor="lastName">Last Name</label>
          <input ref={LastName} type="text" id="lastName" required />
          <label htmlFor="birthday">Birthday</label>
          <Suspense fallback={<div>Loading...</div>}>
            <DatePicker
              className="date-picker"
              showMonthDropdown
              showYearDropdown
              selected={birthday}
              onChange={(date) => setBirthday(date)}
              required
              id="birthday"
              onFocus={() => console.log('DatePicker focused!')}
            />
          </Suspense>
          <label htmlFor="startDate">Start date</label>
          <Suspense fallback={<div>Loading...</div>}>
            <DatePicker
              className="date-picker"
              showMonthDropdown
              showYearDropdown
              todayButton="Today"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
              id="startDate"
              onFocus={() => console.log('DatePicker focused!')}
            />
          </Suspense>
          <label htmlFor="department">Department</label>
          <Suspense fallback={<div>Loading...</div>}>
            <Dropdown options={departmentOptions} onChange={(value) => setDepartment(value)} />
          </Suspense>
        </div>
        <fieldset>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input ref={street} id="street" type="text" required />
          <label htmlFor="city">City</label>
          <input ref={city} id="city" type="text" required />
          <label htmlFor="state">State</label>
          <Suspense fallback={<div>Loading...</div>}>
            <Dropdown options={stateOptions} onChange={(value) => setState(value)} />
          </Suspense>
          <label htmlFor="zip-code">Zip Code</label>
          <input ref={zipCode} id="zip-code" type="number" required />
        </fieldset>
      </div>
      <div className="buttons-container">
        <button type="reset" className="button-form button-red">
          Reset
        </button>
        <button type="submit" className="button-form">
          Save
        </button>
      </div>
    </form>
  )
}

export default Form
