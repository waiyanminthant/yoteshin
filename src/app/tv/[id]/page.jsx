import { CastWidget } from "@/app/components/widgets/CastWidget";
import { ItemDetails } from "@/app/components/widgets/ItemDetails";
import { ListWidget } from "@/app/components/widgets/ListWidget";
import { ReviewCard } from "@/app/components/widgets/ReviewCard";
import { ReviewWidget } from "@/app/components/widgets/ReviewWidget";

const API_KEY = process.env.API_KEY

export default async function MoviePage({ params }) {

  const id = params.id
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`, { next: { revalidate: 36000 } })
  const details = await res.json();

  return (
    <div className="container">
      <ItemDetails type={'tv'} details={details} />
      <CastWidget type={'tv'} id={id} />
      <ReviewWidget type={'tv'} id={id} />
      <ListWidget type={'tv'} params={'similar'} id={id} layout={'verticle'} />
    </div>
  );
}