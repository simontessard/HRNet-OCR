export const addEmployee = (employee) => {
  console.log(employee)
  return {
    type: 'ADD_EMPLOYEE',
    payload: employee,
  }
}
