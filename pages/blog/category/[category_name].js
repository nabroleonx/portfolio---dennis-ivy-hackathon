import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Wrapper } from "../../../components/Wrapper";
import Post from "../../../components/Post";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({ posts, category_name, categories }) {
  return (
    <Wrapper>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-3xl font-light text-gray-600 pb-1 border-b border-gray-300 border-dashed mb-4">
            {category_name} related posts
          </h1>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
            {posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const categories = files.map((filename) => {
    const mdWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(mdWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  const categories = posts.map((post) => post.frontmatter.category);

  const uniqueCategories = [...new Set(categories)];

  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      category_name,
      categories: uniqueCategories,
    },
  };
}
