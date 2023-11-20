import IssueStatusBadge from "@/components/IssueStatusBadge";
import IssuesAction from "./IssuesAction";
import delay from "delay";
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

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  // await delay(3000);
  return (
    <div className="font-poppins">
      <IssuesAction />
      <Table className="">
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
