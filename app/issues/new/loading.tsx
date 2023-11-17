import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="max-w-xl ">
      <Skeleton className="h-8" />
      <Skeleton className="max-h-[500px]" />
    </div>
  );
};

export default loading;
