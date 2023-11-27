"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReportDetails } from "@/lib/types";
import { Link } from "react-router-dom";

export const columns: ColumnDef<ReportDetails>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "documentID",
    header: "Document ID",
  },
  {
    accessorKey: "createdDateAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Reported
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "nameToReport",
    header: "Reported Person",
  },
  {
    accessorKey: "violation",
    header: "Reported for",
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const report = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                if (report.documentID) {
                  navigator.clipboard.writeText(report.documentID);
                } else {
                  console.error("Document ID is undefined");
                }
              }}
            >
              Copy Document ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/viewreport/${report.documentID}`}>
              <DropdownMenuItem>View Report</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
