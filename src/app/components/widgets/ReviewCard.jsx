import dayjs from "dayjs";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";

export function ReviewCard({ details }) {

  const stars = [];
  for (let i = 0; i < details.author_details.rating; i++) {
    stars.push(<span key={i}><FaStar color="yellow" /></span>)
  }
  for (let i = 0; i < 10 - details.author_details.rating; i++) {
    stars.push(<span key={10 - i}><FaStar /></span>)
  }

  return (
    <div className="bg-slate-800 w-full md:w-3/5 rounded-lg my-4">
      <div className="px-4 pt-2 flex flex-col gap-1">
        <div className="text-sm font-bold">
          {details.author}
        </div>
        <div className="text-xs font-light italic">
          {dayjs(details.created_at).format("DD/MM/YYYY - hh:mm A ")}
        </div>
        <div className="flex items-center">
          {stars.map(star => {
            return star
          })}
          <span className="text-xs font-light px-2">{details.author_details.rating ? details.author_details.rating : 0}/10</span>
        </div>
      </div>
      <div className="px-4 pt-4">
        <FaQuoteLeft />
      </div>
      <div className="text-sm px-8 py-4 line-clamp-4 h-32 overflow-scroll no-scrollbar">
        {details.content}
      </div>
      <div className="px-4 pb-4 flex justify-end">
        <FaQuoteRight />
      </div>
    </div>
  );
}