import { Status } from "@prisma/client";
import React from "react";
import { Badge } from "./ui/badge";
import classNames from "classnames";

const IssueStatusBadge = ({ status }: { status: Status }) => {
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
        "bg-red-100 text-red-400  rounded-[5px] hover:bg-red-200":
          status === "OPEN",
        "bg-violet-100 text-violet-400 rounded-[5px] hover:bg-violet-200  ":
          status === "IN_PROGRESS",
        "bg-green-100 text-green-400 rounded-[5px] hover:bg-green-200":
          status === "CLOSED",
        "px-3 py-1.5": true,
      })}
    >
      <span className=""> {label}</span>
    </Badge>
  );
};

export default IssueStatusBadge;
