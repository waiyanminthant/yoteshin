import { ReviewCard } from "./ReviewCard";
import { ErrorWidget } from "./WidgetError";

const API_KEY = process.env.API_KEY

export async function ReviewWidget({ type, id }) {

  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${API_KEY}`, { next: { revalidate: 36000 } })
  const reviewList = await res.json()

  if (!reviewList.results) {
    return <ErrorWidget />
  }

  if (reviewList.results) {
    const finalArray = reviewList.results.sort(function (a, b) {
      return (a.created_at > b.created_at) ? -1 : ((a.created_at < b.created_at) ? 1 : 0)
    }).slice(0, 5)

    return (
      <div className="min-h-40 mt-4">
        <h3 className="text-xl font-bold px-8">
          Latest Reviews
        </h3>
        <div className="px-8 flex justify-between w-screen">
          <div className="flex w-screen overflow-scroll [&>div]:flex-shrink-0 gap-4">
            {finalArray.map(review => {
              return <ReviewCard key={review.id} details={review} />
            })}
            {finalArray.length < 1 ? (
              <span className="pt-2">No Reviews Yet...</span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}