import { NavLinks } from "../components/layout/NavLinks";
import { ListWidget } from "../components/widgets/ListWidget";

export default function showsPage({ searchParams }) {

  const params = searchParams.type || "popular"
  const pageNumber = searchParams.page || 1

  return (
    <div className="px-8 pt-4">
      <NavLinks type={"shows"} active={params} />
      <ListWidget type={"shows"} params={params} layout={"horizontal"} page={pageNumber} />
    </div>
  );
}