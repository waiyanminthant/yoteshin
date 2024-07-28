import dayjs from "dayjs";
import Image from "next/image";
import { Percentage } from "./Percentage";

const POSTER_URL = process.env.POSTER_URL

export function HorizontalCard({ data, type }) {

  const poster = POSTER_URL + data.poster_path
  const releaseDate = dayjs(data.release_date).format("DD MMM YYYY")
  const title = (type === "movie") ? data.title : data.original_name

  return (
    <a href={`/${type === "movie" ? 'movies' : "tv"}/${data.id}`}>
      <div className="flex bg-slate-800 rounded-xl hover:cursor-pointer">
        <div className="h-56">
          <div className="relative w-36 h-56">
            <Image
              placeholder="blur"
              blurDataURL="/spinner.svg"
              alt={title}
              className="rounded-l-lg hover:opacity-70 transition-opacity duration-150"
              src={poster}
              fill
              sizes="(max-height: 224px) 100vw"
            />
            <div className="absolute bottom-2 right-[-20px]">
              <Percentage percentage={Math.ceil(data.vote_average * 10)} />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 pt-1 space-y-2 w-4/5">
          <span className="font-bold">{title}</span>
          <span className="bg-slate-300 px-2 rounded-lg w-fit text-slate-900 font-bold text-xs">{releaseDate}</span>
          <span className="text-sm h-32 line-clamp-1" >{data.overview}</span>
        </div>
      </div>
    </a>
  );
}