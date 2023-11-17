import IssueStatusBadge from "@/components/IssueStatusBadge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import React from "react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import IssuesAction from "./IssuesAction";

const loading = () => {
  const issues = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <IssuesAction />
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Title</TableHead>
            <TableHead className="max-sm:hidden">Status</TableHead>
            <TableHead className="max-sm:hidden">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" text-secondary-foreground">
          {issues.map((issue) => (
            <TableRow key={issue}>
              <TableCell className="font-medium">
                <Skeleton className="" />
                <div className=" sm:hidden">
                  <Skeleton />
                </div>
              </TableCell>
              <TableCell className="max-sm:hidden">
                <Skeleton />
              </TableCell>
              <TableCell className="max-sm:hidden">
                <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default loading;
