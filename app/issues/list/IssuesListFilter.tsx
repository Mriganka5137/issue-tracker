"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@prisma/client";

const statuses: { label: string; value: Status }[] = [
  //   { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssuesListFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-secondary border border-secondary-foreground/20 max-sm:w-full">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent className="bg-secondary ">
        <SelectItem value="all">All</SelectItem>
        {statuses.map((status) => (
          <SelectItem key={status.value} value={status.value}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default IssuesListFilter;
