import Image from "next/image";
import Link from "next/link";
import { HiUserAdd } from "react-icons/hi";
import icon from "../assets/echoverse.png";
import { signIn, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();

  const user = session.data?.user;

  return (
    <nav className="mb-4 border-b border-b-zinc-700 px-2.5 py-4 md:px-4 md:py-6 lg:mb-7">
      <div className="flex w-full items-center justify-between">
        <Link href={"/"} className="">
          <Image src={icon} alt="icon" width={150} height={0} />
        </Link>
        {user == null ? (
          <button
            className="rounded-full bg-gray-200 p-2 text-xl text-gray-900 transition hover:bg-opacity-90 md:text-2xl"
            onClick={() => void signIn()}
          >
            <HiUserAdd />
          </button>
        ) : (
          <Link href={`/profiles/${user?.id}`}>
            <Image
              className=" rounded-full border-2 border-zinc-700 transition hover:border-lime-500 "
              width={45}
              height={45}
              src={user?.image || " "}
              alt={user?.name || " "}
            />
          </Link>
        )}
      </div>
    </nav>
  );
}
