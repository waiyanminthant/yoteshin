import { CastCard } from "./CastCard";
import { ErrorWidget } from "./WidgetError";

const API_KEY = process.env.API_KEY

export async function CastWidget({ type, id }) {

  //fetch cast details
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/${type === "movie" ? "credits" : "aggregate_credits"}?api_key=${API_KEY}`, { next: { revalidate: 36000 } })
  const data = await res.json();

  //show error if no cast is fetched
  if (!data.cast) {
    return <ErrorWidget />
  }

  //render if cast data is fetched
  if (data.cast) {

    //limit the render to top 15 cast
    const topCast = data.cast.slice(0, 15)

    return (
      <div>
        <h3 className="pl-8 pt-4 text-xl font-bold">
          Top Billed Cast
        </h3>
        <div className="px-8 flex justify-between w-screen">
          <div className="flex w-screen overflow-scroll [&>div]:flex-shrink-0 gap-4">
            {topCast.map(cast => {
              return <CastCard key={cast.id} details={cast} />
            })}
          </div>
        </div>
      </div>
    );
  }
}