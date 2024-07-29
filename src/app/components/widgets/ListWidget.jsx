import { FaFilm, FaMagnifyingGlass, FaTv } from "react-icons/fa6";
import { VerticleCard } from "./VerticleCard";
import { ErrorWidget } from "./WidgetError";
import { HorizontalCard } from "./HorizontalCard";
import { capLetters } from "../functions";
import { PagniatoinWidget } from "./PagingWidget";
import dayjs from "dayjs";

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

export async function ListWidget({ params, type, layout, page, id, query }) {

  const searchParams = params
  const pageNumber = page || 1
  let fetchURL;
  let title;

  switch (params) {
    case "similar":
      title = "You May Also Like..."
      break;
    case "search":
      title = `Results: ${query}`
      break;
    default:
      title = capLetters(params + " " + type)
      break;
  }


  //set up title
  // const title = params === "similar" ? "You May Also Like..." : capLetters(params + " " + type)

  //switch fetch url according to the input params
  switch (params) {
    case "upcoming":
      fetchURL = `${API_URL}/discover/${type}?${type === 'movie' ? 'primary_release_date.gte' : 'first_air_date.gte'}=${dayjs().format('YYYY-MM-DD')}&sort_by=primary_release_date.asc&page=${pageNumber}&api_key=${API_KEY}`;
      break;
    case "similar":
      fetchURL = `${API_URL}/${type}/${id}/similar?page=${pageNumber}&api_key=${API_KEY}`;
      break;
    case "search":
      fetchURL = `${API_URL}/search/multi?query=${query}&page=${pageNumber}&api_key=${API_KEY}`;
      break;
    default:
      fetchURL = `${API_URL}/${type}/${searchParams}?page=${pageNumber}&api_key=${API_KEY}`;
      break;
  }

  //fetch data
  const res = await fetch(fetchURL, { next: { revalidate: 36000 } });
  const data = await res.json();


  //show error widget if there is no results
  if (!data.results) return <ErrorWidget />

  //render the results in verticle cards
  if (data.results && layout === "verticle") {
    return (
      <div>
        <h3 className="flex content-center items-center gap-4 text-xl font-extrabold py-4 mx-8">
          <span>
            {type === "movie" ? <FaFilm /> : <FaTv />}
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

  //render the results in horizontal layout
  if (data.results && layout === "horizontal") {
    return (
      <div className="w-full">
        <h3 className="flex content-center items-center gap-4 text-xl font-extrabold">
          <span>
            {params === "search" ? <FaMagnifyingGlass /> : type === "movie" ? <FaFilm /> : <FaTv />}
          </span>
          <span>
            {title}
          </span>
        </h3>
        <div className="flex flex-col gap-4 w-full py-4">
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