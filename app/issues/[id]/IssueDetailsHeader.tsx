import DeleteIcon from "@/components/DeleteIcon";
import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import { Issue } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import IssueDeleteAction from "./IssueDeleteAction";
import { Session, getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AsigneeSelect from "./AsigneeSelect";

interface Props {
  issue: Issue;
}

const IssueDetailsHeader = async ({ issue }: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between col-span-2 max-sm:flex-col">
      <div>
        <h1 className=" line-clamp-1">{issue.title}</h1>
        <div className="flex gap-5 my-3">
          <IssueStatusBadge status={issue.status} />
          <p>{issue.createAt.toDateString()}</p>
        </div>
      </div>

      {session && (
        <div className="flex flex-wrap gap-3 justify-evenly">
          <AsigneeSelect />
          <Button variant={"outline"} className="bg-secondary">
            <Link
              href={`/issues/edit/${issue.id}`}
              className="flex items-center gap-2"
            >
              <FaEdit />
              Edit Issue
            </Link>
          </Button>
          <IssueDeleteAction issueId={issue.id} />
        </div>
      )}
    </div>
  );
};

export default IssueDetailsHeader;
