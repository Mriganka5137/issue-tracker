import { Card, CardContent, CardDescription } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import IssueDetailsHeader from "./IssueDetailsHeader";
import IssueDetailsDescription from "./IssueDetailsDescription";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

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
    <div className=" font-poppins">
      <div className="px-10 max-sm:px-0 ">
        <IssueDetailsHeader issue={issue} />
        <IssueDetailsDescription issueDescription={issue.description} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
