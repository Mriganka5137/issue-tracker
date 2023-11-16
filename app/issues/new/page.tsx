import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewIssue = () => {
  return (
    <div className=" space-y-4 max-w-xl">
      <Input type="text" placeholder="Title" className=" " />
      <Textarea placeholder="Description" className=" " />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
