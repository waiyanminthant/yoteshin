import { NavLinks } from "../components/layout/NavLinks";
import { ListWidget } from "../components/widgets/ListWidget";

export default function MoviesPage({ searchParams }) {

  const type = searchParams.type || "popular"
  const pageNumber = searchParams.page || 1

  return (
    <div className="px-8 pt-4 lg:flex lg:gap-4">
      <NavLinks type={"movie"} active={type} />
      <ListWidget type={"movie"} params={type} layout={"horizontal"} page={pageNumber} />
    </div>
  );
}