import authOptions from "@/app/auth/authOptions";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const IssuesAction = () => {
  return (
    <div className="mb-5">
      <Button className="rounded-[5px]">
        <Link href="/issues/new">Add New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;
