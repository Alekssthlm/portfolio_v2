import { useContext } from "react";
import ProjectItem from "../components/ProjectItem";
import { ThemeContext } from "../App";

export default function Projects() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="projects-section"
      className={`text-center py-[2rem] lg:py-[6rem] px-[1rem] flex flex-col gap-8 ${
        isDarkMode ? "bg-[#2d2d2d]" : "bg-[#2d203e]"
      }`}
    >
      <div className={`max-w-[80rem] 2xl:max-w-[120rem] m-auto flex flex-col items-center gap-8 rounded-lg w-full`}>
        <div className="flex justify-end w-full">
        <h2 className="text-[3rem] md:text-[5rem] font-bold text-white">PROJECTS<span className="text-[#C77D01]">.</span></h2>
        </div>

        <div className="mx-auto grid lg:grid-cols-2 gap-8 place-items-center">
        <ProjectItem id={"ksss"} badges={["Next.js", "Sanity CMS", "react", "tailwind"]} />
        <ProjectItem id={"tick"} badges={["react", "tailwind", "node.js", "swagger", "github actions", "CI/CD", "postgresql", "jwt"]} />
        <ProjectItem id={"toolio"} badges={["javascript", "react", "css3", "api", "team project"]} />
        <ProjectItem id={"snake"} badges={["html5", "css3", "javascript", "api", "node.js"]} />
        <ProjectItem id={"prisoner"} badges={["html5", "css3", "javascript"]} />
        </div>
      </div>
    </section>
  );
}
