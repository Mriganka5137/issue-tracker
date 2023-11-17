"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createIssueSchema } from "@/validation/createIssueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import z from "zod";

type NewIssueForm = z.infer<typeof createIssueSchema>;

const NewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submiting, setSubmiting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewIssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmiting(false);
      setError("Fill the form correctly");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Alert variant="destructive" className="mb-5">
          <AlertCircle className="w-4 h-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form className="space-y-4 " onSubmit={onSubmit}>
        <Input type="text" placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={submiting}>
          Submit New Issue
          {submiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssue;
