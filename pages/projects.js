import Head from "next/head";
import ProjectsCard from "../components/ProjectsCard";
import { Wrapper } from "../components/Wrapper";

const projects = [
  {
    name: "iCan",
    description:
      "An online group chat platform for women to talk about their issues, experience etc.",
    link: "https://nabroleonx.github.io/iCan/",
    linkLabel: "iCan",
    image:
      "https://user-images.githubusercontent.com/84567489/192119270-b6bd2cfc-df07-4b55-a5fc-6bc7d21c53b3.png",
  },
  {
    name: "NibretAd",
    description: "An property listing(i.e. Rent, Sale) platform for Ethiopians",
    link: "https://nibretad.com",
    linkLabel: "nibretad.com",
    image:
      "https://user-images.githubusercontent.com/84567489/192119271-4a3dfbbd-c81a-48c3-8e9d-1687881289e5.png",
  },
  {
    name: "Automated file organizer",
    description: "To clean up your cluttered folders by file types",
    link: "https://github.com/nabroleonx/Automated-file-organizer",
    linkLabel: "GitHub Link",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mn5fui4j727a80ua302g.png",
  },
  {
    name: "Archive manager",
    description: "Simple archive manager to compress and extract zip files.",
    link: "https://github.com/nabroleonx/Automated-file-organizer",
    linkLabel: "GitHub Link",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9g759piwximsbreyej4i.png",
  },
  {
    name: "EVD management system",
    description:
      "An internal tracking tool to manage orders and agents for TechnolabET.",
    link: "#",
    linkLabel: "Private",
    image:
      "https://user-images.githubusercontent.com/84567489/192119269-d9b825a5-ca5d-4f88-91a7-918f521e6b14.png",
  },
  {
    name: "HoooWrite",
    description:
      "A basic monkeytype clone for programmers to practice typing with code -(Hackathon Project)",
    link: "https://nabroleonx.github.io/impractical-hackers-2022/",
    linkLabel: "Hooowrite",
    image:
      "https://user-images.githubusercontent.com/84567489/192119478-d55fb884-1385-4ff3-be90-0b0ad53ce71c.png",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Abel Ayalew</title>
        <meta
          name="description"
          content="Things I’ve made so far both inside and outside of school."
        />
      </Head>

      <Wrapper className="mt-16 sm:mt-32 font-mono">
        <header className="max-w-2xl">
          <h1 className="text-2xl  tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            This are some of the projects I have done so far
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I have done many projects for school and for companies from little
            to big, but here are some projects I recently did the ones that
            stand out
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          {" "}
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectsCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                linkLabel={project.linkLabel}
                image={project.image}
              />
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
}
