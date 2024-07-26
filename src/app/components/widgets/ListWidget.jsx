import { FaFilm, FaTv } from "react-icons/fa6";
import { VerticleCard } from "./VerticleCard";
import { ErrorWidget } from "./WidgetError";
import { HorizontalCard } from "./HorizontalCard";
import { capLetters } from "../functions";
import { PagniatoinWidget } from "./PagingWidget";

const API_KEY = process.env.API_KEY

export async function ListWidget({ params, type, layout, page }) {

  const searchParams = params
  const pageNumber = page || 1
  const res = (type === "movies") ? await fetch(`https://api.themoviedb.org/3/movie/${searchParams}?page=${pageNumber}&api_key=${API_KEY}`, { next: { revalidate: 36000 } }) : await fetch(`https://api.themoviedb.org/3/tv/${searchParams}?page=${pageNumber}&api_key=${API_KEY}`, { next: { revalidate: 36000 } });
  const data = await res.json();
  const title = capLetters(params + " " + type)

  if (!data.results) return <ErrorWidget />

  if (data.results && layout === "verticle") {
    return (
      <div>
        <h3 className="flex content-center items-center gap-4 text-xl font-extrabold py-4 mx-8">
          <span>
            {type === "movies" ? <FaFilm /> : <FaTv />}
          </span>
          {title}
        </h3>
        <div className="flex justify-between w-screen">
          <div className="flex w-screen overflow-scroll [&>div]:flex-shrink-0 gap-4 ml-8">
            {data.results.map((data) => {
              return <VerticleCard key={data.id} data={data} type={type} />
            })}
          </div>
        </div>
      </div>
    );
  }

  if (data.results && layout === "horizontal") {
    return (
      <div>
        <h3 className="flex content-center items-center gap-4 text-xl font-extrabold py-4">
          <span>
            {type === "movies" ? <FaFilm /> : <FaTv />}
          </span>
          <span>
            {title}
          </span>
        </h3>
        <div className="flex flex-col gap-4 w-full">
          {data.results.map((data) => {
            return (
              <HorizontalCard key={data.id} data={data} type={type} />
            )
          })}
        </div>
        <PagniatoinWidget page={data.page} totalPage={data.total_pages > 500 ? 500 : data.total_pages} />
      </div>
    );
  }
}