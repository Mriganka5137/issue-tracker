"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className=" space-y-4 max-w-xl">
      <Input type="text" placeholder="Title" className=" " />
      <SimpleMdeReact placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
