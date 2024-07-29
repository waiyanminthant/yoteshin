import { ListWidget } from "../components/widgets/ListWidget";

export const metadata = {
  title: `Search...`,
};

export default function SearchResultsPage({ searchParams }) {

  const query = searchParams.query

  return (
    <div className="mt-4 mx-8">
      <ListWidget layout={'horizontal'} page={1} params={'search'} query={query} />
    </div>
  );
}