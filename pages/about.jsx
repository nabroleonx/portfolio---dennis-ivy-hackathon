import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";

import { Wrapper } from "../components/Wrapper";
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "../components/Icons";
import avatarImage from "./assets/images/my-avatar.jpg";

function Icons({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <a href={href} className="flex">
        <>
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </>
      </a>
    </li>
  );
}

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

export default function About() {
  return (
    <>
      <Head>
        <title>About - Abel Gashaw</title>
        <meta
          name="description"
          content="I’m Abel Gashaw Ayalew. I am a software developer based in Ethiopia."
        />
      </Head>
      <Wrapper className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-800 dark:text-zinc-300 sm:text-5xl">
              Hey there 👋, I am Abel.
            </h1>
            <div className="mt-6 space-y-7 text-base font-mono text-justify text-zinc-500 dark:text-zinc-400">
              <p>
                I am a software developer based in Ethiopia. I am currently
                enrolled as a fourth year Software Engineering student Bahir Dar
                Institute of Technology.
              </p>
              <p>
                I was born and raised in a rural area. However, I have always
                been fascinated with technology. I love maths and physics. When
                I was a kid, I was always tinkering with broken radios and other
                gadgets in our house. My family used to say I am going to be an
                engineer one day. I believe that played a large role to where I
                am now. I didn’t have a phone let alone a computer for almost my
                entire adulthood. Despite all of that, my curiousty was fueling
                my passion for technology day after day.
              </p>
              <p>
                I remember the first time I touched a computer. A guy who used
                to live in our compound was learning his MSc and his brother
                sent him a PC for his thesis. I used to sit with him and watch
                how it all works. I was a quick learner and quite an
                experimenter so I end up helping him navigate things.
              </p>
              <p>
                One day I was watching a show called &quote;Tech-Talk with
                Solomon&quote; and lucky for me the guest was Prof. Jelani
                Nelson. I remember him explaning binary seach algorithms using
                the famous phone book analogy, and then I was hooked. It was
                like a revelation for me. I was in grade 9 then. From that day
                on, I took his pc when he was not using it and started teaching
                myself some HTML. The rest is history. I went on to learn
                different programming languages Python, JavaScript, Java, C++
                etc and different frameworks and libraries(Reactjs/Nextjs,
                Django, etc).
              </p>
              <p>
                Currently I am working as a MERN stack developer as a freelancer
                and also developing{" "}
                <a
                  className="text-sky-600 font-bold"
                  href="https://www.nibretad.com"
                >
                  Nibretad
                </a>
                .
              </p>
            </div>
          </div>
          <div className="lg:pl-20 text-zinc-600 dark:text-zinc-400">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <Icons
                className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500"
                href="https://twitter.com/nabroleonx"
                icon={TwitterIcon}
              >
                Twitter
              </Icons>

              <Icons
                href="https://github.com/nabroleonx"
                icon={GitHubIcon}
                className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500"
              >
                GitHub
              </Icons>
              <Icons
                href="https://www.linkedin.com/in/abel-ayalew-a564b7210/"
                icon={LinkedInIcon}
                className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500"
              >
                LinkedIn
              </Icons>
              <Icons
                href="mailto:nabroleonx@gmail.com"
                icon={MailIcon}
                className="mt-4 group transition hover:text-sky-500 dark:hover:text-sky-500 cursor-pointer border border-zinc-300 dark:border-zinc-600 px-3 py-2 rounded hover:border-sky-500"
              >
                Email
              </Icons>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
