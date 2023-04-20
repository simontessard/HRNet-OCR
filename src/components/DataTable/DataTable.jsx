import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Table } from '../Table/Table'
import './datatable.css'

function DataTable() {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Informations',
        columns: [
          {
            Header: 'Date Of Birth',
            accessor: 'dateOfBirth',
          },
          {
            Header: 'Start Date',
            accessor: 'startDate',
          },
          {
            Header: 'Department',
            accessor: 'department',
          },
          {
            Header: 'Street',
            accessor: 'street',
          },
          {
            Header: 'City',
            accessor: 'city',
          },
          {
            Header: 'State',
            accessor: 'state',
          },
          {
            Header: 'ZIP Code',
            accessor: 'zipCode',
          },
        ],
      },
    ],
    []
  )
  const employeesData = useSelector((state) => state.employees)
  const data = useMemo(() => employeesData, [employeesData])

  return (
    <div className="data-table">
      <Table columns={columns} data={data} />
    </div>
  )
}

export default DataTable
