import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const IssuesAction = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">Add New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;
