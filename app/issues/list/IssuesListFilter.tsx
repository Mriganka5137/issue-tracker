"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: string; value: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssuesListFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      defaultValue={searchParams.get("status") || "all"}
      onValueChange={(status) => {
        searchParams.get("orderBy");
        const params = new URLSearchParams();
        const statusParams = status === "all" ? "" : status;

        if (statusParams) params.append("status", statusParams);
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);

        const query = params.size ? "?" + params.toString() : "";
        router.push(`/issues/list${query}`);
      }}
    >
      <SelectTrigger className="w-[150px] bg-secondary border border-secondary-foreground/20 max-sm:w-full">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent className="bg-secondary ">
        <SelectItem value="all" className="cursor-pointer">
          All
        </SelectItem>
        {statuses.map((status) => (
          <SelectItem
            key={status.value}
            value={status.value}
            className="cursor-pointer "
          >
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default IssuesListFilter;
