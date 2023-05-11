import { useState } from "react";
import Image from "next/image";
import {
  RiMenuFill,
  RiPencilLine,
  RiAddFill,
  RiCloseFill,
} from "react-icons/ri";
import MenuSidebar from "../MenuSidebar";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className={`fixed h-full bg-white lg:bg-gray-100 ${
          showSidebar ? "left-0" : "-left-full"
        } top-0 w-[75%] md:w-[40%] lg:w-auto lg:sticky transition-all ease-in-out z-50`}
      >
        <div className="flex items-center gap-x-2 p-4">
          <button
            type="button"
            className="p-4 hover:bg-gray-200 transition-colors rounded-full text-xl"
          >
            <RiMenuFill />
          </button>
          <Image
            src="/imgs/logo-gmail.png"
            alt="Logo Gmail"
            width={100}
            height={50}
          />
        </div>
        <div className="pb-4 px-4">
          <button
            type="button"
            className="py-4 px-6 bg-primary flex items-center justify-center gap-4 rounded-2xl hover:drop-shadow-md transition-all"
          >
            <RiPencilLine className="text-2xl" /> Redactar
          </button>
        </div>
        <MenuSidebar />
        <div className="mt-4 p-4">
          <div className="flex items-center justify-between">
            <h5>Etiquetas</h5>
            <button
              type="button"
              className="text-2xl p-1 hover:bg-gray-200 transition-colors rounded-full"
            >
              <RiAddFill />
            </button>
          </div>
        </div>
      </div>
      {/* Boton móvil */}
      <button
        type="button"
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed bottom-4 right-4 text-2xl p-4 bg-secondary rounded-full"
      >
        {showSidebar ? <RiCloseFill /> : <RiMenuFill />}
      </button>
    </>
  );
}
