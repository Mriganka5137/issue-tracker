"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  DoubleArrowLeft,
  DoubleArrowRight,
  SingleArrowLeft,
  SingleArrowRight,
} from "./icons/HeroIcons";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-5 max-sm:flex-col">
      <div className="space-x-3 ">
        <Button
          variant={"outline"}
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <DoubleArrowLeft className="w-5 h-5" />
        </Button>
        <Button
          variant={"outline"}
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <SingleArrowLeft className="w-5 h-5" />
        </Button>
      </div>
      <p>
        Page {currentPage} of {pageCount}
      </p>
      <div className="space-x-3 ">
        <Button
          variant={"outline"}
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <SingleArrowRight className="w-5 h-5" />
        </Button>
        <Button
          variant={"outline"}
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <DoubleArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
