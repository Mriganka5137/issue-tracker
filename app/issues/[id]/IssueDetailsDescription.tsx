import { Card } from "@/components/ui/card";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetailsDescription = ({
  issueDescription,
}: {
  issueDescription: string;
}) => {
  return (
    <Card className="w-full p-3 mt-10 bg-secondary">
      <ReactMarkdown>{issueDescription}</ReactMarkdown>
    </Card>
  );
};

export default IssueDetailsDescription;
