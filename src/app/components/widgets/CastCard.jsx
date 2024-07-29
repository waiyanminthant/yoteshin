import Image from "next/image";

const POSTER_URL = process.env.POSTER_URL

export function CastCard({ details }) {

  //setup profile image scource url and fallback image
  const imageSrc = details.profile_path === null ? '/cast_placeholder.svg' : `${POSTER_URL}/${details.profile_path}`

  return (
    <div className="bg-slate-800 w-36 h-68 rounded-lg flex flex-col my-4">
      <div className="relative w-36 h-52">
        <Image
          placeholder='blur'
          blurDataURL="/spinner.svg"
          alt={details.name}
          className="rounded-t-lg hover:opacity-70 transition-opacity duration-150"
          src={imageSrc}
          fill
          sizes="(max-width: 208px) 100vw (max-width: 96px) 50vw"
        />
      </div>
      <div className="h-fit w-30 py-2">
        <div className="font-bold text-sm text-center px-2">
          {details.name}
        </div>
        <div className="text-xs text-center pt-2 px-2">
          {details.character ? details.character : details.roles[0].character}
        </div>
      </div>
    </div>
  );
} 