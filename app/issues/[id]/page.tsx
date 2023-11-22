import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetailsDescription from "./IssueDetailsDescription";
import IssueDetailsHeader from "./IssueDetailsHeader";
import { Metadata } from "next";

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

export async function generateMetadata({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }

  return {
    title: `${issue.title} | Issue Tracker`,
    description: issue.description,
  };
}
