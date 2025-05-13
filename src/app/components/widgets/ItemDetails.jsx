import { Percentage } from "@/app/components/widgets/Percentage";
import dayjs from "dayjs";
import Image from "next/image";
import { FaCalendarDays, FaCircleInfo, FaClock } from "react-icons/fa6";

const POSTER_URL = process.env.POSTER_URL

export function ItemDetails({ details, type }) {

  //setup title according to type
  const title = type === "movie" ? details.title : details.name

  //function to render Genres as pills
  function GenreItem({ genre }) {
    return <span className="text-xs bg-slate-300 w-fit px-2 rounded-xl font-bold text-slate-900">{genre}</span>
  }

  return (
    <div className="h-fit">
      {/* background-image */}
      <div className="absolute blur bg-cover w-full h-[600px]" style={{ backgroundImage: `url(${POSTER_URL}/${details.backdrop_path})` }}>
      </div>
      {/* everything else */}
      <div className="pt-8 px-8 flex flex-col md:flex-row gap-12 backdrop-brightness-100 w-full items-center md:items-start h-fit md:h-[460px]">
        <div className="relative w-64 min-h-96 rounded-lg">
          <Image
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt={title}
            className="rounded-lg hover:opacity-70 transition-opacity duration-150"
            src={`${POSTER_URL}/${details.poster_path}`}
            fill
            sizes="(max-width: 256px) 100vw (max-width: 96px) 50vw"
          />
        </div>
        <div className="flex flex-col gap-4 md:pt-10 md:w-4/5 items-center md:items-start">
          <div>
            <div className="text-3xl font-extrabold text-center md:text-start pb-4">{title}</div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaCalendarDays />
              <span className="text-sm font-extrabold">{dayjs(details.release_date).format("DD/MM/YYYY")}</span>
              {type === "movie" ? (
                <>
                  <FaClock />
                  <span className="text-sm font-extrabold">{details.runtime} Min</span>
                </>
              ) : null}
              <FaCircleInfo />
              <span className="text-sm font-extrabold">{details.status}</span>
            </div>
          </div>
          <div className="space-x-2">
            {details.genres ? details.genres.map(genre => {
              return <GenreItem key={genre.id} genre={genre.name} />
            }) : null}
          </div>
          <div className="flex items-center gap-2">
            <span>User Score:</span>
            <Percentage percentage={Math.ceil(details.vote_average * 10)} />
          </div>
          <div>
            <span className="text-sm italic font-semibold">{details.tagline ? details.tagline : null}</span>
          </div>
          <div className="text-center md:text-start">
            <span>{details.overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
}