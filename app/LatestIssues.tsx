import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import prisma from "@/prisma/client";
import Link from "next/link";
import React from "react";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createAt: "desc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <CardHeader>
        <h1>Latest Issues</h1>
      </CardHeader>
      <Table>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-3">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assignedToUserId && (
                    <Avatar className="cursor-pointer ">
                      <AvatarImage src={issue.assignedToUser?.image!} />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default LatestIssues;
