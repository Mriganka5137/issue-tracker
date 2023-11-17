import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
    <div className="font-poppins">
      <h1>{issue.title}</h1>
      <div className="flex gap-5 my-3">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createAt.toDateString()}</p>
      </div>
      <Card className="p-3 mt-10 prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
