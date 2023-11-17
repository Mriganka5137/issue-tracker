import { Status } from "@prisma/client";
import React from "react";
import { Badge } from "./ui/badge";
import classNames from "classnames";

const IssueStatusBadge = ({ status }: { status: Status }) => {
  console.log(status);
  let label;
  switch (status) {
    case "OPEN":
      label = "Open";
      break;
    case "CLOSED":
      label = "Closed";
      break;
    case "IN_PROGRESS":
      label = "In Progress";
    default:
      break;
  }

  return (
    <Badge
      className={classNames({
        "bg-red-400 hover:bg-red-500": status === "OPEN",
        "bg-violet-400 hover:bg-violet-500": status === "IN_PROGRESS",
        "bg-green-400 hover:bg-green-500": status === "CLOSED",
      })}
    >
      {label}
    </Badge>
  );
};

export default IssueStatusBadge;
