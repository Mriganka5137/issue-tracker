import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { FaEdit } from "react-icons/fa";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 font-poppins ">
      <div className="flex justify-between col-span-2 max-sm:flex-col">
        <div>
          <h1 className=" line-clamp-1">{issue.title}</h1>
          <div className="flex gap-5 my-3">
            <IssueStatusBadge status={issue.status} />
            <p>{issue.createAt.toDateString()}</p>
          </div>
        </div>
        <div>
          <Button variant={"outline"} className="">
            <Link
              href={`/issues/${issue.id}/edit`}
              className="flex items-center gap-2"
            >
              <FaEdit />
              Edit Issue
            </Link>
          </Button>
        </div>
      </div>
      <div className="col-span-2 px-10 max-sm:px-0 ">
        <Card className="w-full p-3 mt-10">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </div>
    </div>
  );
};

export default IssueDetailPage;
