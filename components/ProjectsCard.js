import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function ProjectsCard({
  name,
  description,
  link,
  linkLabel,
  image,
}) {
  return (
    <div className="group relative flex flex-col items-start">
      <img className="w-full h-40 rounded-t" src={image} />
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <>
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:group-hover:opacity-100 dark:bg-slate-800/50 sm:-inset-x-6 sm:rounded-2xl" />
          <Link href={link} passHref>
            <a>
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{name}</span>
            </a>
          </Link>
        </>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">{linkLabel}</span>
      </p>
    </div>
  );
}
