// import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Wrapper } from "../../components/Wrapper";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import markdownToHtml from "@/lib/markdown";

export default function Post({
  frontmatter: { title, category, date, cover_image },
  content,
  slug,
}) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>
      <Wrapper className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link href="/blog" aria-label="Go back to articles" passHref>
              <a className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0">
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </a>
            </Link>

            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {title}
                </h1>
                <time
                  dateTime={date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{date}</span>
                </time>
              </header>
              <div className="text-sm mt-2 font-mono text-zinc-600 dark:text-zinc-400 text-justify">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </article>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(path.join("posts", slug + ".md"));

  let { data: frontmatter, content } = matter(mdWithMeta);

  content = await markdownToHtml(content || "");

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
