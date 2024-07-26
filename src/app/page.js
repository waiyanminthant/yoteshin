import { ListWidget } from "./components/widgets/ListWidget";

const API_KEY = process.env.API_KEY

export default async function Home() {

  return (
    <div>
      <ListWidget type={"movies"} params={"popular"} layout={"verticle"} />
      <ListWidget type={"shows"} params={"popular"}  layout={"verticle"} />
      <ListWidget type={"movies"} params={"top_rated"} layout={"verticle"} />
      <ListWidget type={"shows"} params={"top_rated"} layout={"verticle"} />
    </div>
  );
}

