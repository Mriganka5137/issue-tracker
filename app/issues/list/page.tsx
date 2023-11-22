import Pagination from "@/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssueTable, { IssueQuery, columnValues } from "./IssueTable";
import IssuesAction from "./IssuesAction";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnValues.includes(searchParams.orderBy)
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
      <IssueTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        itemCount={itemCount}
        pageSize={pageSize}
      />
    </div>
  );
};

export default IssuesPage;
