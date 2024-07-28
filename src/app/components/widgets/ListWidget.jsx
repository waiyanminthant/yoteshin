import { FaFilm, FaTv } from "react-icons/fa6";
import { VerticleCard } from "./VerticleCard";
import { ErrorWidget } from "./WidgetError";
import { HorizontalCard } from "./HorizontalCard";
import { capLetters } from "../functions";
import { PagniatoinWidget } from "./PagingWidget";
import dayjs from "dayjs";

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

export async function ListWidget({ params, type, layout, page }) {

  const searchParams = params
  const pageNumber = page || 1
  const upcomingParams = `discover/${type}?${type === 'movie' ? 'primary_release_date.gte' : 'first_air_date.gte'}=${dayjs().format('YYYY-MM-DD')}&sort_by=primary_release_date.asc&page=${pageNumber}&api_key=${API_KEY}`
  const normalParams = `${type}/${searchParams}?page=${pageNumber}&api_key=${API_KEY}`

  const res = params === "upcoming" ? (
    await fetch(`${API_URL}/${upcomingParams}`, { next: { revalidate: 36000 } })
  ) : (
    await fetch(`${API_URL}/${normalParams}`, { next: { revalidate: 36000 } })
  )

  const data = await res.json();
  const title = capLetters(params + " " + type)

  if (!data.results) return <ErrorWidget />

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

  if (data.results && layout === "horizontal") {
    return (
      <div className="w-full">
        <h3 className="flex content-center items-center gap-4 text-xl font-extrabold py-4">
          <span>
            {type === "movie" ? <FaFilm /> : <FaTv />}
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