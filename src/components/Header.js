import React from "react";
import {
  RiSearchLine,
  RiFilterLine,
  RiQuestionLine,
  RiSettings3Line,
  RiGridFill,
} from "react-icons/ri";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 h-[8vh]">
      <div className="w-full">
        <form>
          <div className="relative w-full">
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 left-1 p-3 hover:bg-gray-200/60 transition-colors rounded-full"
            >
              <RiSearchLine />
            </button>
            <input
              type="text"
              className="bg-secondary/40 py-3 px-12 outline-none w-full rounded-lg"
              placeholder="Buscar correo"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-1 p-3 hover:bg-gray-200/60 transition-colors rounded-full"
            >
              <RiFilterLine />
            </button>
          </div>
        </form>
      </div>
      <ul className="hidden w-full md:flex items-center md:justify-end gap-2">
        <li>
          <button
            type="button"
            className="text-2xl p-2 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiQuestionLine />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-2xl p-2 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiSettings3Line />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-2xl p-2 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiGridFill />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-xl p-2 bg-[#8E6E63] text-white rounded-full hover:ring-2 hover:ring-[#8E6E63]/50"
          >
            J
          </button>
        </li>
      </ul>
    </header>
  );
}
