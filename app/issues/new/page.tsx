"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import error from "next/error";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/validation/createIssueSchema";

type NewIssueForm = z.infer<typeof createIssueSchema>;

const NewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewIssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Alert variant="destructive" className="mb-5">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form
        className=" space-y-4 "
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("Fill the form correctly");
          }
        })}
      >
        <Input type="text" placeholder="Title" {...register("title")} />
        {errors.title && (
          <p className=" text-red-400">{errors.title.message}</p>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <p className=" text-red-400">{errors.description.message}</p>
        )}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssue;
