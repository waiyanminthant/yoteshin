import { MovieWidget } from "./components/widgets/MovieWidget";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  return (
    <div>
      <MovieWidget API_KEY={API_KEY} params={"popular"} title={"Popular Movies"}/>
      <MovieWidget API_KEY={API_KEY} params={"top_rated"} title={"Movies with High Praise"} />
    </div>
  );
}

