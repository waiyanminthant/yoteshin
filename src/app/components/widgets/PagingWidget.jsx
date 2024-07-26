"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export function PagniatoinWidget({ page, totalPage }) {

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentPage = page
  const buttons = []
  const buttonClass = "px-2 py-1 bg-slate-300 font-bold text-sm text-slate-900 rounded-sm hover:opacity-80 cursor-pointer"
  const activeClass = "px-2 py-1 bg-slate-300 font-bold text-sm text-slate-900 rounded-sm opacity-80"

  const newQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  //render buttons for more than 6 pages & active page is less than equals to 6
  if (totalPage > 6 && currentPage <= 6) {
    for (let i = 0; i < 7; i++) {
      if (i + 1 === currentPage) {
        buttons.push(
          <span key={i} className={activeClass}>
            {i + 1}
          </span>
        );
      } else {
        buttons.push(
          <span key={i} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', i + 1)) }}>
            {i + 1}
          </span >
        );
      }
    }
    buttons.push(<span key={"filler"} >...</span>)
    buttons.push(<span key={totalPage} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', totalPage)) }}>{totalPage}</span>)
  }

  //render buttons for more than 6 pages & active page is greater than 6 but more than 6 pages away from end
  if (totalPage > 6 && currentPage > 6 && currentPage <= totalPage - 6) {
    buttons.push(<span key={1} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', 1)) }}>1</span>)
    buttons.push(<span key={"filler"} >...</span>)
    for (let i = -3; i < 4; i++) {
      if (i === 0) {
        buttons.push(
          <span key={currentPage} className={activeClass}>
            {currentPage}
          </span>
        )
      } else {
        buttons.push(
          <span key={Number(currentPage) + i} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', currentPage + i)) }}>
            {Number(currentPage) + i}
          </span>
        );
      }
    }
    buttons.push(<span key={"filler"} >...</span>)
    buttons.push(<span key={totalPage} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', totalPage)) }}>{totalPage}</span>)
  }

  //render buttons for more than 6 pages & active page is greater than 6 but less than 6 pages away from end
  if (totalPage > 6 && currentPage > totalPage - 6) {
    buttons.push(<span key={1} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', 1)) }}>1</span>)
    buttons.push(<span key={"filler"} >...</span>)
    for (let i = totalPage - 6; i < totalPage; i++) {
      if (i === Number(currentPage - 1)) {
        buttons.push(
          <span key={i} className={activeClass}>
            {i + 1}
          </span>
        )
      } else {
        buttons.push(<span key={i} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', i + 1)) }}>{i + 1}</span>)
      }
    }
  }


  //render the buttons for total page less than 6
  if (totalPage <= 6) {
    for (let i = 0; i < totalPage; i++) {
      if (i + 1 === currentPage) {
        buttons.push(
          <span key={i} className={activeClass}>
            {i + 1}
          </span>
        );
      } else {
        buttons.push(
          <span key={i} className={buttonClass} onClick={() => { router.push(pathname + "?" + newQueryString('page', i + 1)) }}>
            {i + 1}
          </span>
        );
      }
    }
  }


  return (
    <div className="flex justify-center mt-4 gap-4 items-center">
      <span className="cursor-pointer hover:opacity-80" onClick={() => { currentPage > 1 ? router.push(pathname + "?" + newQueryString('page', currentPage - 1)) : null }}>
        <FaChevronLeft />
      </span>
      {buttons.map(button => {
        return button
      })}
      <span
        className="cursor-pointer hover:opacity-80"
        onClick={() => { currentPage === totalPage ? null : router.push(pathname + "?" + newQueryString('page', currentPage + 1)) }}
      >
        <FaChevronRight />
      </span>
    </div>
  );
}