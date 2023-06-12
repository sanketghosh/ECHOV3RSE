import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <section className="p-4">
      <div className="flex flex-col items-center gap-5">
        <Image
          className=" rounded-full border-[0.35rem] border-lime-500 object-contain"
          src={user?.image || ""}
          width={150}
          height={150}
          alt={user?.name || ""}
        />
        <h1 className="text-2xl font-semibold">
          Hi 👋 I am <span className="text-lime-500">{user?.name || " "}</span>
        </h1>
      </div>
    </section>
  );
}
