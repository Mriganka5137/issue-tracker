import authOptions from "@/app/auth/authOptions";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import IssuesListFilter from "./IssuesListFilter";

const IssuesAction = () => {
  return (
    <div className="flex items-center justify-between gap-5 my-10 max-sm:flex-col">
      <IssuesListFilter />
      <Button className="rounded-[5px] max-sm:w-full">
        <Link href="/issues/new">Add New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;
