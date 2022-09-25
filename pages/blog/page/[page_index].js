import fs from "fs";
import path from "path";

import { Wrapper } from "../../../components/Wrapper";
import Post from "../../../components/Post";
import { getPosts } from "@/lib/posts";

export default function Home({ posts, categories }) {
  return (
    <Wrapper>
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-medium mt-16 mb-1 text-zinc-700 dark:text-zinc-200">
          My blogs
        </h1>
        <p className="text-zinc-400 font-mono mb-2">
          Here you will find technical stuff I write about from time to time.
          This is empty right now, but more content coming soon.
        </p>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  let paths = [];

  for (let i = 1; i <= files.length; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  const categories = posts.map((post) => post.frontmatter.category);

  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      posts: posts,
      categories: uniqueCategories,
    },
  };
}
