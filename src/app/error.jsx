"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ErrorPage({ error }) {

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Image className="py-8" src={`/warning.svg`} width={400} height={400} />
      <div className="text-center">Something went wrong...</div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
}
