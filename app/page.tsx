import Pagination from "@/components/Pagination";
import page from "./issues/[id]/page";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <h1 className="text-3xl font-poppins">Issue Tracker</h1>
    </>
  );
}
