import Link from "next/link";
import {
  RiInboxFill,
  RiStarLine,
  RiTimeLine,
  RiSendPlane2Line,
  RiFile3Line,
  RiArrowDownSLine,
} from "react-icons/ri";

export default function MenuSidebar() {
  return (
    <ul className="pr-2">
      <li>
        <Link
          href="/"
          className="flex items-center justify-between bg-secondary py-1.5 px-5 rounded-tr-full rounded-br-full text-sm"
        >
          <span className="flex items-center gap-4 font-bold">
            <RiInboxFill />
            Recibidos
          </span>
          <span className="font-bold">11</span>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="flex items-center gap-4 py-1.5 px-5 rounded-tr-full rounded-br-full hover:bg-gray-200 transition-colors text-sm"
        >
          <RiStarLine />
          Destacados
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="flex items-center gap-4 py-1.5 px-5 rounded-tr-full rounded-br-full hover:bg-gray-200 transition-colors text-sm"
        >
          <RiTimeLine />
          Pospuestos
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="flex items-center gap-4 py-1.5 px-5 rounded-tr-full rounded-br-full hover:bg-gray-200 transition-colors text-sm"
        >
          <RiSendPlane2Line />
          Enviados
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="flex items-center gap-4 py-1.5 px-5 rounded-tr-full rounded-br-full hover:bg-gray-200 transition-colors text-sm"
        >
          <RiFile3Line />
          Borradores
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="flex items-center gap-4 py-1.5 px-5 rounded-tr-full rounded-br-full hover:bg-gray-200 transition-colors text-sm"
        >
          <RiArrowDownSLine />
          Más
        </Link>
      </li>
    </ul>
  );
}
