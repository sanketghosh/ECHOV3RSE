import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { BottomNav, Navbar } from "~/components";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>ECHOV3RSE</title>
        <meta
          name="description"
          content="A social media platform promoting unrestricted freedom of speech, fostering open dialogue, and celebrating diverse perspectives"
        />
        <link rel="icon" href="/echoverse.png" />
      </Head>
      <main className="min-h-screen bg-zinc-800 font-poppins text-gray-100">
        <div className="mx-auto max-w-5xl">
          <Navbar />
          <Component {...pageProps} />
          <BottomNav />
        </div>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
