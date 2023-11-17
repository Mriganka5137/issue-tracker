import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import Link from "next/link";
import React from "react";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/issues/new">Add New Issue</Link>
        </Button>
      </div>
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
            <TableRow key={issue.id}>
              <TableCell className="font-medium">
                {issue.title}
                <div className=" sm:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </TableCell>
              <TableCell className="max-sm:hidden">
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="max-sm:hidden">
                {issue.createAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IssuesPage;
