import React, { useMemo, useState, FC } from 'react'
import {
  compareBigNumber,
  compareNumber,
  compareString
} from './Table.handlers'
import { LoadingIcon } from '../LoadingIcon'

type TableHeader = {
  text: string
  className: string
}

type TableColumn = {
  dataField: string
  dataType: 'Text' | 'BigNumber' | 'Date' | 'Number'
}

type TableProps = {
  headers: TableHeader[]
  columns: TableColumn[]
  isLoading: boolean
  className: string
  headerClassName: string
  scrollContainerClassName: string
  rowRenderer: (
    index: number,
    data: any,
    isOpen?: boolean,
    onClick?: (index: number) => void
  ) => JSX.Element
  data: any[]
  defaultSortIndex?: number
}

type SortState = {
  columnIndex?: number
  ascending: boolean
}

export const Table: FC<TableProps> = (props) => {
  const [sortState, setSortState] = useState({
    ascending: false,
    columnIndex: props.defaultSortIndex
  } as SortState)
  const [openIndex, setOpenIndex] = useState(-1)

  const sort = (data: any[]): any[] => {
    if (sortState.columnIndex === undefined) {
      return data.concat()
    } else {
      const fieldNames = props.columns[sortState.columnIndex!].dataField.split(
        '.'
      )
      const fieldType = props.columns[sortState.columnIndex!].dataType
      let compareFunction: (a: any, b: any) => number
      switch (fieldType) {
        case 'Date':
        case 'Number':
          compareFunction = compareNumber
          break
        case 'BigNumber':
          compareFunction = compareBigNumber
          break
        default:
          compareFunction = compareString
      }

      return data.sort((a: any, b: any) => {
        let aField: any = a
        let bField: any = b
        for (let i = 0; i < fieldNames.length; i++) {
          const fieldName = fieldNames[i]
          aField = aField[fieldName]
          bField = bField[fieldName]
        }
        let result = compareFunction(aField, bField)
        if (!sortState.ascending) result *= -1
        return result
      })
    }
  }

  const onHeaderClick = (columnIndex: number) => {
    const already = sortState.columnIndex === columnIndex
    setOpenIndex(-1)
    if (already) {
      setSortState({ columnIndex, ascending: !sortState.ascending })
    } else {
      setSortState({ columnIndex, ascending: true })
    }
  }

  const getSortClass = (columnIndex: number): string => {
    if (columnIndex === sortState.columnIndex) {
      return sortState.ascending ? 'ascending' : 'descending'
    } else {
      return ''
    }
  }

  const headerCols = props.headers.map((h, i) => {
    return (
      <div
        key={`hcol${i}`}
        className={`${h.className} ${getSortClass(i)}`}
        onClick={() => onHeaderClick(i)}
      >
        {h.text}
      </div>
    )
  })

  const sortedData = useMemo(() => sort(props.data), [sortState, props.data])

  const rows = []
  for (let i = 0; i < sortedData.length; i++) {
    rows.push(
      props.rowRenderer(i, sortedData[i], i === openIndex, (index: number) =>
        setOpenIndex(openIndex === index ? -1 : index)
      )
    )
  }

  return (
    <div className={props.className}>
      <div className={props.headerClassName}>
        {headerCols}
        {props.children}
      </div>
      <div className={props.scrollContainerClassName}>{rows}</div>
      {props.isLoading && <LoadingIcon />}
    </div>
  )
}
