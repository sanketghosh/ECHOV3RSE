import Link from "next/link";
import { useState } from "react";
import { ImHome, ImUser } from "react-icons/im";
import { FaPenSquare } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { ImUserPlus } from "react-icons/im";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signIn, signOut, useSession } from "next-auth/react";

export default function BottomNav() {
  const [lightMode, setLightMode] = useState(false);

  function handleLightMode() {
    setLightMode(!lightMode);
  }

  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="fixed bottom-8 left-0 right-0 mx-auto flex w-[22rem] items-center justify-center rounded-full border-2 border-zinc-600 border-opacity-40 bg-zinc-900 px-3 py-2 shadow-md shadow-zinc-950 md:bottom-7 md:w-[40rem] md:px-5 md:py-3 lg:bottom-10">
      <div className="flex w-[90%] items-center justify-between md:w-[70%]">
        <Link
          href={"/"}
          className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
        >
          <ImHome />
        </Link>
        {user != null && (
          <Link
            href={`/profiles/${user.id}`}
            className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
          >
            <ImUser />
          </Link>
        )}
        <Link
          href={"/createpost"}
          className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
        >
          <FaPenSquare />
        </Link>
        <button className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl">
          <BsFillSunFill />
        </button>
        {user == null ? (
          <button
            onClick={() => void signIn()}
            className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
          >
            <ImUserPlus />
          </button>
        ) : (
          <button
            onClick={() => void signOut()}
            className="rounded-full bg-zinc-950 p-2 text-[1.15rem] text-lime-500 transition-[0.4s] hover:bg-lime-500 hover:text-zinc-900 md:p-3 md:text-2xl"
          >
            <RiLogoutCircleRLine />
          </button>
        )}
      </div>
    </nav>
  );
}
