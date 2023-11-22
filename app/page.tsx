import Pagination from "@/components/Pagination";
import page from "./issues/[id]/page";
import LatestIssues from "./LatestIssues";

export default function Home() {
  return (
    <div>
      <LatestIssues />
    </div>
  );
}
