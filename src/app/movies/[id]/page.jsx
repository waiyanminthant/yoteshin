import { CastWidget } from "@/app/components/widgets/CastWidget";
import { ItemDetails } from "@/app/components/widgets/ItemDetails";
import { ListWidget } from "@/app/components/widgets/ListWidget";
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
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
  const details = await res.json();

  return (
    <div className="container">
      <ItemDetails type={'movie'} details={details} />
      <CastWidget type={'movie'} id={id}/>
      <ReviewWidget type={'movie'} id={id} />
      <ListWidget type={'movie'} params={'similar'} layout={'verticle'} id={id} page={1} />
    </div>
  );
}