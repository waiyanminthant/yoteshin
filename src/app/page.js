import { ListWidget } from "./components/widgets/ListWidget";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  return (
    <div>
      <ListWidget type={"movie"} API_KEY={API_KEY} params={"popular"} title={"Popular Movies"} />
      <ListWidget type={"shows"} API_KEY={API_KEY} params={"popular"} title={"Popular Shows"} />
      <ListWidget type={"movie"} API_KEY={API_KEY} params={"top_rated"} title={"Top Rated Movies"} />
      <ListWidget type={"shows"} API_KEY={API_KEY} params={"top_rated"} title={"Top Rated Shows"}  />
    </div>
  );
}

