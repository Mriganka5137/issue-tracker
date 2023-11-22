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
  }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
    },

    {
      label: "In Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
    },
  ];

  return (
    <div className="flex gap-3">
      {containers.map((container) => (
        <Card key={container.label}>
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
