import { NavLinks } from "../components/layout/NavLinks";
import { ListWidget } from "../components/widgets/ListWidget";

export const metadata = {
  title: "Browse TV Shows",
};

export default function showsPage({ searchParams }) {

  const params = searchParams.type || "popular"
  const pageNumber = searchParams.page || 1

  return (
    <div className="px-8 pt-4 lg:flex lg:gap-4">
      <NavLinks type={"tv"} active={params} />
      <ListWidget type={"tv"} params={params} layout={"horizontal"} page={pageNumber} />
    </div>
  );
}