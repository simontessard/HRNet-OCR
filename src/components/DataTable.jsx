import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'

import { TbCircleArrowDownFilled, TbCircleArrowUpFilled } from 'react-icons/tb'

const Styles = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  table {
    border-spacing: 0;
    border: 1px solid black;
    border-radius: 5px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.6rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    padding: 1rem;
  }
  .search-bar input {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
  .arrowIcon {
    margin-left: 0.5rem;
    width: 20px;
    height: 20px;
    vertical-align: text-top;
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)} // on définit la valeur du filtre global
          placeholder=" Search..."
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TbCircleArrowDownFilled className="arrowIcon" />
                      ) : (
                        <TbCircleArrowUpFilled className="arrowIcon" />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

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
  console.log(employeesData)

  const data = useMemo(() => employeesData, [employeesData])
  console.log(data)

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default DataTable
