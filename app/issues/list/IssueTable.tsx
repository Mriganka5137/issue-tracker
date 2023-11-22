import IssueStatusBadge from "@/components/IssueStatusBadge";
import Link from "@/components/Link";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Issue, Status } from "@prisma/client";
import { ArrowUp } from "lucide-react";
import NextLink from "next/link";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
    <Card className="">
      <Table className="">
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
    </Card>
  );
};

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title", className: "w-[350px]" },
  { label: "Status", value: "status", className: "max-sm:hidden" },
  { label: "Created", value: "createAt", className: "max-sm:hidden" },
];

export const columnValues = columns.map((column) => column.value);
export default IssueTable;
