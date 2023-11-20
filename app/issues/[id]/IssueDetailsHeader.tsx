import DeleteIcon from "@/components/DeleteIcon";
import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import { Issue } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  issue: Issue;
}

const IssueDetailsHeader = ({ issue }: Props) => {
  return (
    <div className="flex justify-between col-span-2 max-sm:flex-col">
      <div>
        <h1 className=" line-clamp-1">{issue.title}</h1>
        <div className="flex gap-5 my-3">
          <IssueStatusBadge status={issue.status} />
          <p>{issue.createAt.toDateString()}</p>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <Button variant={"outline"} className="">
          <Link
            href={`/issues/${issue.id}/edit`}
            className="flex items-center gap-2"
          >
            <FaEdit />
            Edit Issue
          </Link>
        </Button>
        <Button
          className="border border-red-400 group hover:bg-red-400"
          variant="outline"
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default IssueDetailsHeader;
