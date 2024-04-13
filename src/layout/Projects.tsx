import ProjectItem from "../components/ProjectItem";

export default function Projects() {

  return (
    <section id="projects-section"
      className={`text-center py-[2rem] lg:py-[6rem] px-[1rem] flex flex-col gap-8`}
    >
      <div className={`max-w-[80rem] 2xl:max-w-[120rem] m-auto flex flex-col items-center gap-8 rounded-lg w-full`}>
        <div className="flex justify-end w-full">
        <h2 className="text-[15vmin] font-bold ">PROJECTS<span className="text-[#C77D01]">.</span></h2>
        </div>

        <div className="mx-auto grid lg:grid-cols-2 gap-8 place-items-center">
        <ProjectItem id={"tick"} badges={["react", "tailwind", "node.js", "swagger", "github actions", "CI/CD", "postgresql", "jwt"]} />
        <ProjectItem id={"toolio"} badges={["javascript", "react", "css3", "api", "team project"]} />
        <ProjectItem id={"snake"} badges={["html5", "css3", "javascript", "api", "node.js"]} />
        <ProjectItem id={"prisoner"} badges={["html5", "css3", "javascript"]} />
        </div>
      </div>
    </section>
  );
}
