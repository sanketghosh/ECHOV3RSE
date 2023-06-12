import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";

/* import { signIn, signOut, useSession } from "next-auth/react"; */

const Home: NextPage = () => {
  return (
    <div className="p-4 text-xs md:text-sm">
      <h1>Use the navigation bar to navigate through</h1>
    </div>
  );
};

export default Home;
