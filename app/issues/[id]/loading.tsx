import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <Skeleton className="h-8 max-w-sm mb-3" />
      <Skeleton className="h-8 max-w-[50px] mb-3" />
      <Skeleton className="max-w-md h-[200px]"></Skeleton>
    </>
  );
};

export default loading;
