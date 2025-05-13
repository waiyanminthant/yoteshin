import { CastWidget } from "@/app/components/widgets/CastWidget";
import { ItemDetails } from "@/app/components/widgets/ItemDetails";
import { ListWidget } from "@/app/components/widgets/ListWidget";
import { ReviewCard } from "@/app/components/widgets/ReviewCard";
import { ReviewWidget } from "@/app/components/widgets/ReviewWidget";

const API_KEY = process.env.API_KEY

export default async function MoviePage({ params }) {

  var options ={
      next: { revalidate: 3600 },
      method: "GET",
      headers: { 
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    }

  const id = params.id
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}`, options)
  const details = await res.json();

  return (
    <div className="container overflow-visible no-scrollbar">
      <ItemDetails type={'tv'} details={details} />
      <CastWidget type={'tv'} id={id} />
      <ReviewWidget type={'tv'} id={id} />
      <ListWidget type={'tv'} params={'similar'} id={id} layout={'verticle'} />
    </div>
  );
}