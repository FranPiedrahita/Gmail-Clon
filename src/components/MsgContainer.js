import {
  RiCheckboxBlankLine,
  RiRefreshLine,
  RiMore2Fill,
  RiArrowUpSLine,
} from "react-icons/ri";
import Msg from "./Msg";

export default function MsgContainer() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <ul className="flex items-center gap-2">
          <li>
            <button
              type="button"
              className="text-xl p-2 hover:bg-gray-200 transition-colors rounded-full"
            >
              <RiCheckboxBlankLine />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-xl p-2 hover:bg-gray-200 transition-colors rounded-full"
            >
              <RiRefreshLine />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-xl p-2 hover:bg-gray-200 transition-colors rounded-full"
            >
              <RiMore2Fill />
            </button>
          </li>
        </ul>
        <span className="font-medium text-gray-500">Es</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <button
            type="button"
            className="flex items-center gap-4 py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg"
          >
            <RiArrowUpSLine /> No leídos
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-4 py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg text-xs">
            1-10 de 10
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiMore2Fill />
          </button>
        </div>
      </div>
      <div>
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
        <Msg active />
      </div>
      <div className="flex items-center justify-between my-4">
        <div>
          <button
            type="button"
            className="flex items-center gap-4 py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg"
          >
            <RiArrowUpSLine /> Todos los demas
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-4 py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg text-xs">
            1-10 de 10
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-200 transition-colors rounded-full"
          >
            <RiMore2Fill />
          </button>
        </div>
      </div>
      <div>
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
        <Msg />
      </div>
    </div>
  );
}
