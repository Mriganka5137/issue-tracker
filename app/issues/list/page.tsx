import IssueStatusBadge from "@/components/IssueStatusBadge";
import IssuesAction from "./IssuesAction";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import Link from "@/components/Link";
import { Status } from "@prisma/client";
import { undefined } from "zod";

interface Props {
  searchParams: {
    status: Status;
  };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
  });
  return (
    <div className="font-poppins">
      <IssuesAction />
      <Table className="bg-secondary">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[350px]">Title</TableHead>
            <TableHead className="max-sm:hidden">Status</TableHead>
            <TableHead className="max-sm:hidden">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" text-secondary-foreground">
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="font-medium">
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="mt-3 sm:hidden">
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
