import { ListWidget } from "./components/widgets/ListWidget";

const API_KEY = process.env.API_KEY

export default async function Home() {

  return (
    <div>
      <ListWidget type={"movie"} params={"popular"} layout={"verticle"} />
      <ListWidget type={"tv"} params={"popular"}  layout={"verticle"} />
      <ListWidget type={"movie"} params={"top_rated"} layout={"verticle"} />
      <ListWidget type={"tv"} params={"top_rated"} layout={"verticle"} />
    </div>
  );
}

