"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Fish = {
  id: string
  typeoffish: string
  englishname: string
  localname: string

}

export const columns: ColumnDef<Fish>[] = [
  {
    accessorKey: "typeoffish",
    header: "Type of Fish",
  },
  {
    accessorKey: "englishname",
    header: "English Name",
  },
  {
    accessorKey: "localname",
    header: "Local Name",
  },
]
