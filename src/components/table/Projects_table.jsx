import React, { useState } from "react"
import { projects } from "./projects_list"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Badges from "../Badges"

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("description", {
    header: () => "Description",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.tech, {
    id: "tech",
    cell: (info) => (
      <div>
        {info.getValue().map((tech, index) => (
          <Badges key={index} type={tech} text={tech} />
        ))}
      </div>
    ),
    header: () => "Technology",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("GitHub", {
    header: () => "GitHub",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
]

const Projects_table = () => {
  const [data, setData] = useState(projects)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-lg border-darkReaderBorder">
      <Table className="">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableCell colSpan={columns.length} className="h-24 text-center">
              {" "}
              No results.
            </TableCell>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Projects_table
