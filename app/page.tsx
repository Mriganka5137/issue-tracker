import Pagination from "@/components/Pagination";
import LatestIssues from "./LatestIssues";
import IssueSumary from "./IssueSumary";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  return (
    <div className="flex gap-10 max-lg:flex-col">
      <div className="flex flex-col gap-5">
        <IssueSumary open={open} closed={closed} inProgress={inProgress} />
        <IssueChart open={open} closed={closed} inProgress={inProgress} />
      </div>

      <LatestIssues />
    </div>
  );
}
