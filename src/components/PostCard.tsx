import React from "react";
import { Post } from "./InfinitePostList";
import Image from "next/image";

export default function PostCard({
  id,
  user,
  content,
  createdAt,
  loveCount,
  lovedByMe,
}: Post) {
  const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
  });

  return (
    <div className="m-2 w-[90%] flex-col items-center border-b-[1px] border-zinc-600 border-opacity-60 px-2 py-3 md:px-4">
      <div className="flex w-full items-center gap-3">
        <Image
          src={user.image || " "}
          width={38}
          height={38}
          alt={user.name || ""}
          className="rounded-full border-2 border-gray-500"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-lime-500 md:text-base">
              {user.name || ""}
            </span>
            <span className="text-xs text-gray-400 ">
              {dateTimeFormatter.format(createdAt)}
            </span>
          </div>
          <p className="text-xs text-gray-200 md:text-[13px]">{content}</p>
        </div>
      </div>
    </div>
  );
}
