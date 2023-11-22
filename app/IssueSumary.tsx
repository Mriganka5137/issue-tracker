import { Card, CardContent } from "@/components/ui/card";
import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSumary = ({ open, closed, inProgress }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
    bgColor: string;
    textColor: string;
  }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },

    {
      label: "In Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
      bgColor: "bg-violet-50",
      textColor: "text-violet-700",
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
  ];

  return (
    <div className="flex gap-3">
      {containers.map((container) => (
        <Card
          key={container.label}
          className={(container.bgColor, container.textColor)}
        >
          <CardContent className="flex flex-col items-start gap-2 p-5">
            <Link
              href={`/issues/list?status=${container.status}`}
              className="text-sm font-medium hover:text-primary hover:underline"
            >
              {container.label}
            </Link>
            <p className="text-3xl font-bold">{container.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IssueSumary;
