"use client";

import { ColumnDef } from "@tanstack/react-table";
import fileExample from "@/assets/images/fileExample.gif";

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
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "../ui/dialog";

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
    accessorKey: "File status",
    header: "Proof/Evidences",
    cell: ({ row }) => {
      const report = row.original;
      return Number(report.fileStatus) == 0
        ? "No Evidence Submitted"
        : "Evidence Submitted";
    },
  },

  {
    id: "evidence",
    header: "Evidence",
    cell: ({ row }) => {
      const report = row.original;
      return (
        <Dialog>
          <DialogTrigger
            disabled={Number(report.fileStatus) == 0 ? true : false}
            className=" border p-2 rounded-md bg-nextColor text-white dark:bg-opacity-50 disabled:opacity-50"
          >
            View Evidence
          </DialogTrigger>
          <DialogContent>
            <h1 className=" font-semibold text-2xl">{report.violation}</h1>
            <img src={fileExample} alt="example" />
          </DialogContent>
        </Dialog>
      );
    },
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
              <DropdownMenuItem>Download Report</DropdownMenuItem>
              <DropdownMenuItem>Set Status</DropdownMenuItem>
              <DropdownMenuItem>Flag Report</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
