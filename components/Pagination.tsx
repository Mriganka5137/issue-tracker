import React from "react";
import { Button } from "./ui/button";
import {
  DoubleArrowLeft,
  DoubleArrowRight,
  SingleArrowLeft,
  SingleArrowRight,
} from "./icons/HeroIcons";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  return (
    <div className="flex items-center gap-3">
      <Button variant={"outline"} disabled={currentPage === 1}>
        <DoubleArrowLeft className="w-5 h-5" />
      </Button>
      <Button variant={"outline"} disabled={currentPage === 1}>
        <SingleArrowLeft className="w-5 h-5" />
      </Button>
      <p>
        Page {currentPage} of {pageCount}
      </p>
      <Button variant={"outline"} disabled={currentPage === pageCount}>
        <SingleArrowRight className="w-5 h-5" />
      </Button>
      <Button variant={"outline"} disabled={currentPage === pageCount}>
        <DoubleArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Pagination;
