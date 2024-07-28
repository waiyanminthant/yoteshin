import { FaCheck } from "react-icons/fa6";
import { capLetters } from "../functions";

export function NavLinks({ type, active }) {

  const movieLinks = ["popular", "top_rated", "now_playing", "upcoming"]
  const showLinks = ["popular", "top_rated", "airing_today", "on_the_air", "upcoming"]
  const classLarge = "flex gap-2 items-center px-2 font-bold cursor-pointer hover:text-slate-700"
  const classLargeActive = "flex gap-2 items-center px-2 font-bold cursor-pointer text-slate-700"
  const classSmall = "flex items-center gap-4 bg-slate-300 px-1 rounded-xl text-slate-950 text-xs font-bold"

  function LinkItem({ link, size }) {
    return (
      <a
        className={size === "large" ? link === active ? classLargeActive : classLarge : classSmall}
        href={`/${type}?type=${link}`}
      >
        {capLetters(link)}
      </a>
    )
  }

  return (
    <>
      <div className="lg:w-80 h-fit py-4 bg-slate-900 rounded-md sticky top-20 hidden lg:inline">
        <div className="flex flex-col gap-8 items-center">
          {type === "movie" ? (
            movieLinks.map(link => (
              <LinkItem key={link} link={link} size={'large'} />
            ))
          ) : (
            showLinks.map(link => (
              <LinkItem key={link} link={link} size={'large'} />
            ))
          )}
        </div>
      </div>
      <div className="lg:hidden flex gap-1">
        {type === "movie" ? (
          movieLinks.map(link => (
            <LinkItem key={link} link={link} />
          ))
        ) : (
          showLinks.map(link => (
            <LinkItem key={link} link={link} />
          ))
        )}
      </div>
    </>
  )
}