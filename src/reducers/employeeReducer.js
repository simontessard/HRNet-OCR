const initialState = [
  {
    firstName: 'Baptiste',
    lastName: 'Lebreton',
    dateOfBirth: '4/6/2001',
    startDate: '4/5/2023',
    department: 'Engineering',
    street: '20 rue du peuplier',
    city: 'New York',
    state: 'Alaska',
    zipCode: '45555',
  },
  {
    firstName: 'Jean',
    lastName: 'Durand',
    dateOfBirth: '1/1/1998',
    startDate: '6/5/2023',
    department: 'Legal',
    street: '4 rue du temple',
    city: 'Los Angeles',
    state: 'Maine',
    zipCode: '77555',
  },
  {
    firstName: 'Gaston',
    lastName: 'Potier',
    dateOfBirth: '2/11/1980',
    startDate: '4/5/2023',
    department: 'Engineering',
    street: 'Rue de Paris',
    city: 'Houston',
    state: 'Nevada',
    zipCode: '89552',
  },
  {
    firstName: 'Nathan',
    lastName: 'Lallemand',
    dateOfBirth: '4/6/2005',
    startDate: '4/6/2023',
    department: 'Marketing',
    street: 'Rue du jardin',
    city: 'Washington',
    state: 'California',
    zipCode: '33555',
  },
  {
    firstName: 'Camille',
    lastName: 'Dernio',
    dateOfBirth: '23/6/2005',
    startDate: '3/3/1998',
    department: 'Sales',
    street: 'Rue du peuplier',
    city: 'New York',
    state: 'Alaska',
    zipCode: '45666',
  },
]

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload]
    default:
      return state
  }
}

export default employeeReducer
