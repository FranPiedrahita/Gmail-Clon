import Link from "next/link";
import {
  RiCheckboxBlankLine,
  RiStarLine,
  RiBookmarkLine,
} from "react-icons/ri";

export default function Msg({ active }) {
  return (
    <Link
      href="/"
      className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-2 hover:bg-gray-100 transition-colors rounded-lg border-b border-gray-200 ${
        active && "font-bold"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full lg:w-[95%]">
        <div className="flex items-center w-full lg:w-1/12">
          <button
            type="button"
            className="p-2 text-gray-400 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiCheckboxBlankLine />
          </button>
          <button
            type="button"
            className="p-2 text-gray-400 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiStarLine />
          </button>
          <button
            type="button"
            className="p-2 text-gray-400 hover:bg-gray-200 transition-colors rounded-full rotate-90"
          >
            <RiBookmarkLine />
          </button>
        </div>
        <div className="w-full lg:w-2/12">
          <h5>The MongoDB Team</h5>
        </div>
        <div className="w-full lg:w-9/12">
          <p>¡Nuevo webinar! Data mesh, datos como producto y MACH</p>
        </div>
      </div>
      <div className="w-full lg:w-[5%]">
        <p>12 abr</p>
      </div>
    </Link>
  );
}
