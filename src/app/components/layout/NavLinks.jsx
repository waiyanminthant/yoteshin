import { FaCheck } from "react-icons/fa6";
import { capLetters } from "../functions";

export function NavLinks({ type, active }) {

  const movieLinks = ["popular", "top_rated", "now_playing", "upcoming"]
  const showLinks = ["popular", "top_rated", "airing_today", "on_the_air"]

  function LinkItem({ link }) {
    return (
      <a
        className="flex gap-1 items-center bg-slate-300 rounded-xl px-2 text-sm text-slate-900 font-bold cursor-pointer"
        href={`/${type}?type=${link}`}
      >
        {active === link ? <span><FaCheck /></span> : null}
        {capLetters(link)}
      </a>
    )
  }

  return (
    <div className="flex gap-4">
      {type === "movies" ? (
        movieLinks.map(link => (
          <LinkItem key={link} link={link} />
        ))
      ) : (
        showLinks.map(link => (
          <LinkItem key={link} link={link} />
        ))
      )}
    </div>
  )
}