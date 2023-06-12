import Link from "next/link";
import { useState } from "react";
import { ImHome, ImUser } from "react-icons/im";
import { FaPenSquare, FaSun } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";

export default function BottomNav() {
  const [lightMode, setLightMode] = useState(false);

  function handleLightMode() {
    setLightMode(!lightMode);
  }

  return (
    <nav className="fixed bottom-8 left-0 right-0 mx-auto flex w-[22rem] items-center justify-center rounded-full border-2 border-zinc-600 border-opacity-40 bg-zinc-900 px-3 py-2 shadow-md shadow-zinc-950 md:bottom-7 md:w-[40rem] md:px-5 md:py-3 lg:bottom-10">
      <div className="flex w-[90%] items-center justify-between md:w-[70%]">
        <Link
          href={"/"}
          className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
        >
          <ImHome />
        </Link>
        <Link
          href={"/profile"}
          className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
        >
          <ImUser />
        </Link>
        <Link
          href={"/createpost"}
          className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
        >
          <FaPenSquare />
        </Link>
        <button className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl">
          <FaSun />
        </button>
        <Link
          href={"/logout"}
          className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
        >
          <RiLoginCircleLine />
        </Link>
      </div>
    </nav>
  );
}
