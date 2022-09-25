import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Post({ post, compact }) {
  return (
    <div
      key={post.slug}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden font-mono"
    >
      {!compact && (
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={post.frontmatter.cover_image}
            alt=""
          />
        </div>
      )}
      <div className="flex-1 bg-slate-100 dark:bg-slate-800/60 p-6 flex flex-col justify-between hover:-translate-y-1 hover:opacity-100">
        <div className="flex-1 ">
          <p className="text-sm font-medium text-slate-400">
            <Link
              href={`/blog/category/${post.frontmatter.category.toLowerCase()}`}
            >
              <a className="border border-gray-300 dark:border-gray-700 rounded-sm bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-gray-800 px-2 py-px">
                {post.frontmatter.category}
              </a>
            </Link>
          </p>
          <Link href={`/blog/${post.slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {post.frontmatter.title}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {post.frontmatter.excerpt}...
                <span className="inline-flex items-center ml-1 text-sm text-sky-400">
                  Read blog{" "}
                  <ChevronRightIcon className="h-3 w-3 text-sky-400" />
                </span>
              </p>
            </a>
          </Link>
        </div>
        {!compact && (
          <div className="mt-2 flex items-center">
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>5 min read</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
