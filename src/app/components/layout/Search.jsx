"use client"

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const divClass = "mt-20 flex justify-around mx-8 gap-4"
  const pageDivClass = "mt-20 mb-8 flex justify-around mx-8 gap-4"

  const handleQueryInput = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className={pathname.includes(`/movies` || '/tv') ? pageDivClass : divClass}>
      <input
        type="text"
        className="bg-slate-800 rounded-full h-8 w-11/12 px-8 hover:bg-slate-700"
        placeholder="Search"
        value={query}
        onChange={(e) => handleQueryInput(e)}
      />
      <button
        onClick={() => router.push(`/search?query=${query}`)}
        className="bg-slate-800 rounded px-2 text-sm w-24 hover:bg-slate-700"
      >
        Search
      </button>
    </div>
  );
}