"use client";
import DeleteIcon from "@/components/DeleteIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const IssueDeleteAction = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="border border-red-400 group hover:bg-red-400"
          variant="outline"
        >
          <DeleteIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=" bg-secondary/50">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 hover:bg-red-600"
            onClick={async () => {
              await axios.delete("/api/issues/" + issueId);
              router.push("/issues");
              router.refresh();
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default IssueDeleteAction;
