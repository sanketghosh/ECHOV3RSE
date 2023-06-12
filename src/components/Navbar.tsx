import Image from "next/image";
import Link from "next/link";
import icon from "./echoverse.png";

export default function Navbar() {
  return (
    <nav className="mb-4 border-b border-b-zinc-700 px-2.5 py-4 md:px-4 md:py-6 lg:mb-7">
      <div className="flex w-full items-center justify-between">
        <Link href={"/"} className="">
          <img
            src="./echoverse.png"
            alt="icon"
            className="w-32 md:w-40 lg:w-44"
          />
        </Link>
        <Link href={"/"}>
          <img
            className="h-10 w-10 rounded-full border-2 border-zinc-700 transition hover:border-lime-500 md:h-12 md:w-12"
            src={
              "https://vercel.com/api/www/avatar/815ee2f0aeba69b2dc66e0f403bd9fb222f79c29?s=60"
            }
            alt="profile"
          />
        </Link>
      </div>
    </nav>
  );
}
