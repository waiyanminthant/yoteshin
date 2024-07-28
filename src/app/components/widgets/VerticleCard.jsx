import dayjs from "dayjs";
import Image from "next/image";
import { Percentage } from "./Percentage";

const POSTER_URL = process.env.POSTER_URL

export function VerticleCard({ data, type }) {

  const poster = POSTER_URL + data.poster_path
  const releaseDate = dayjs(data.release_date).format("DD MMM YYYY")
  const title = (type === "movie") ? data.title : data.original_name

  return (
    <a href={`/${type === "movie" ? 'movies' : "tv"}/${data.id}`} className="container bg-slate-900 w-52 h-96 rounded-lg mb-3 hover:cursor-pointer flex flex-col items-center justify-around">
      <div className="relative w-52 h-80">
        <Image
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={title}
          className="rounded-t-lg hover:opacity-70 transition-opacity duration-150"
          src={poster}
          fill
          sizes="(max-width: 208px) 100vw (max-width: 96px) 50vw"
        />
        <div className="absolute bottom-[-18px] left-[12px]">
          <Percentage percentage={Math.ceil(data.vote_average * 10)} />
        </div>
      </div>
      <div className="h-12 flex flex-col items-center mt-6 gap-1">
        <p className="text-center lg:text-sm sm:text-xs font-bold truncate w-48">{title}</p>
        <p className="text-center text-xs font-light">{releaseDate}</p>
      </div>
    </a>
  );
}