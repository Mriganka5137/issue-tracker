import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-poppins">Issue Tracker</h1>
      <Pagination itemCount={100} pageSize={10} currentPage={1} />
    </>
  );
}
