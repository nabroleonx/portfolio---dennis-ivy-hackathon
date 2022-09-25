import React from "react";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import { Wrapper } from "../components/Wrapper";
import { getPosts } from "@/lib/posts";
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "../components/Icons.js";
import Post from "../components/Post";

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}
function Icons({ className, href, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link href={href}>
        <>
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        </>
      </Link>
    </li>
  );
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>
          Abel Gashaw Ayalew - Software Developer based in Ethiopia.
        </title>
        <meta
          name="description"
          content="I’m Abel, a software designer and entrepreneur based in New York
          City. I’m the co-founder of nibretad.com and working as a freelancer
          to to different companies, where I develop simple automation tools
          like scraping scripts full-stack web apps."
        />
      </Head>
      <Wrapper className="mt-9 font-mono">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer based in Ethiopia.
          </h1>
          <p className="mt-6 text-base text-justify text-zinc-600 dark:text-zinc-400">
            I’m Abel, a software designer and entrepreneur based in New York
            City. I’m the co-founder of nibretad.com and working as a freelancer
            to to different companies, where I develop simple automation tools
            like scraping scripts full-stack web apps.
          </p>
          <div className="mt-6 flex gap-6">
            <Icons
              className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500 dark:hover:border-sky-500"
              href="https://twitter.com/nabroleonx"
              icon={TwitterIcon}
            />

            <Icons
              href="https://github.com/nabroleonx"
              icon={GitHubIcon}
              className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500 dark:hover:border-sky-500"
            />
            <Icons
              href="https://www.linkedin.com/in/abel-ayalew-a564b7210/"
              icon={LinkedInIcon}
              className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500 dark:hover:border-sky-500"
            />
            <Icons
              href="mailto:nabroleonx@gmail.com"
              icon={MailIcon}
              className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500 dark:hover:border-sky-500"
            />
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/nabroleonx/Automated-file-organizer/files/9640109/Abel.Gashaw.-.Resume.pdf<a"
              className="mt-4 group transition text-zinc-700 dark:text-zinc-200 hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500 dark:hover:border-sky-500"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-mono mt-16 text-zinc-700 dark:text-zinc-200">
            Featured articles
          </h1>
          <div className="flex flex-col items-start gap-5">
            <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post, index) => (
                <Post post={post} key={index} compact={true} />
              ))}
            </div>
            <Link href="/blog">
              <a className="px-3 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:border-gray-700 rounded-lg">
                Check out more &gt;
              </a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: getPosts().slice(0, 3) },
  };
}
