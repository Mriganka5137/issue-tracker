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
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUp } from "lucide-react";
import Pagination from "@/components/Pagination";

interface Props {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    page: string;
  };
}

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title", className: "w-[350px]" },
  { label: "Status", value: "status", className: "max-sm:hidden" },
  { label: "Created", value: "createAt", className: "max-sm:hidden" },
];

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const itemCount = await prisma.issue.count({
    where: {
      status,
    },
  });

  return (
    <div className="font-poppins">
      <IssuesAction />
      <Table className=" bg-secondary">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.label} className={column.className}>
                <NextLink
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.label}
                </NextLink>
                {column.value === searchParams.orderBy && (
                  <ArrowUp className="inline" />
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className=" text-secondary-foreground">
          {issues.map((issue) => (
            <TableRow key={issue.id} className="">
              <TableCell className="font-medium">
                <Link
                  href={`/issues/${issue.id}`}
                  className="line-clamp-1 text-sky-600 hover:underline"
                >
                  {issue.title}
                </Link>
                <div className="mt-2 sm:hidden">
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
      <Pagination
        currentPage={page}
        itemCount={itemCount}
        pageSize={pageSize}
      />
    </div>
  );
};

export default IssuesPage;
