import React from "react";
import Skeleton from "react-loading-skeleton";

const IssueFormSkeleton = () => {
  return (
    <div className="flex flex-col max-w-xl gap-3">
      <Skeleton className="h-8" />
      <Skeleton className="h-[500px]" />
    </div>
  );
};

export default IssueFormSkeleton;
