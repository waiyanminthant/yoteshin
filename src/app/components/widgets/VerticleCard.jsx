import dayjs from "dayjs";
import Image from "next/image";

const POSTER_URL = process.env.POSTER_URL

export function VerticleCard({ data, type }) {

  const poster = POSTER_URL + data.poster_path
  const releaseDate = dayjs(data.release_date).format("DD MMM YYYY")
  const title = (type === "movie") ? data.title : data.original_name

  return (
    <div className="container bg-slate-800 w-52 h-96 rounded-lg mb-3 hover:cursor-pointer">
      <div className="relative w-52 h-80">
        <Image
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={data.original_title}
          className="rounded-t-lg pb-2 hover:opacity-70 transition-opacity duration-150"
          src={poster}
          fill
          sizes="(max-width: 208px) 100vw (max-width: 96px) 50vw"
        />
      </div>
      <p className="text-center lg:text-sm sm:text-xs font-bold truncate mx-4">{title}</p>
      <p className="text-center text-xs font-light">{releaseDate}</p>
    </div>
  );
}