import { NavLinks } from "../components/layout/NavLinks";
import { ListWidget } from "../components/widgets/ListWidget";
import { PagniatoinWidget } from "../components/widgets/PagingWidget";

export default function MoviesPage({ searchParams }) {

  const type = searchParams.type || "popular"
  const pageNumber = searchParams.page || 1

  return (
    <div className="px-8 pt-4">
      <NavLinks type={"movies"} active={type} />
      <ListWidget type={"movies"} params={type} layout={"horizontal"} page={pageNumber} />
    </div>
  );
}