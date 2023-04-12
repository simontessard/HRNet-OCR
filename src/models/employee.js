/** Class representing an employee */
export default class Employee {
  constructor(
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    department,
    street,
    city,
    state,
    zipCode
  ) {
    this._firstName = firstName
    this._lastName = lastName
    this._dateOfBirth = dateOfBirth
    this._startDate = startDate
    this._department = department
    this._street = street
    this._city = city
    this._state = state
    this._zipCode = zipCode
  }

  get firstName() {
    return this._firstName
  }

  get lastName() {
    return this._lastName
  }

  get dateOfBirth() {
    return this._dateOfBirth
  }

  get startDate() {
    return this._startDate
  }

  get department() {
    return this._department
  }

  get street() {
    return this._street
  }

  get city() {
    return this._city
  }

  get state() {
    return this._state
  }

  get zipCode() {
    return this._zipCode
  }
}
