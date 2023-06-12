import { useSession } from "next-auth/react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

export default function CreatePost() {
  const [inputValue, setInputValue] = useState("");

  const session = useSession();

  if (session.status !== "authenticated") return null;

  const createPost = api.post.create.useMutation({
    onSuccess: (newPost) => {
      // console.log(newPost);
      setInputValue("");
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createPost.mutate({ content: inputValue });
  }

  return (
    <form className="flex flex-col gap-3 p-3" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
        <Image
          src={session.data.user.image || ""}
          alt={session.data.user.name || " "}
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <button className="self-end rounded-xl bg-lime-500 px-4 py-1.5 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-50">
          Go Viral
        </button>
      </div>
      <div className="mt-3">
        <textarea
          className="min-h-[15rem] w-full flex-grow resize-none overflow-hidden bg-transparent p-0 text-xs outline-none md:text-sm lg:min-h-[25rem]"
          placeholder="Share your thoughts here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
      </div>
    </form>
  );
}
