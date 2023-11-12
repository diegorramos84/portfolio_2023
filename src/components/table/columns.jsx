import { ColumnDef } from "@tanstack/react-table"

const columns = () => [
  {
    Header: "ID",
    accessor: "id_number",
  },
  {
    Header: "Project name",
    accessor: "projectName",
  },
  {
    Header: "GitHub",
    accessor: "github",
  },
]

export default columns
