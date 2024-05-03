import { useContext } from "react";
import { ThemeContext } from "../App";
import portrait from "../assets/portrait.webp"
import AnimatedText from "../components/AnimatedText";

export default function Hero() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="hero-section" className="h-[45rem] sm:h-lvh md:h-lvh px-[2rem] pt-[8rem] md:pt-0 lg:h-lvh lg:max-h-[70rem] md:flex">
      <div
        className={`max-w-[100rem] m-auto flex flex-col px-4 md:p-[2rem] md:justify-center md:flex-row md:gap-[4rem] lg:gap-[6rem] w-[100%]`}
      >
        
        <div className="flex flex-col text-center md:text-left gap-5">
        <div className="mx-auto">
            <img src={portrait} alt="" className={`w-[35vmin] md:w-[30vmin] rounded-full border-solid border-[0.8rem] ${
        isDarkMode ? "border-[#898989]" : "border-[#2d203e]"
      }`}/>
          </div>
          <h1 className="font-bold text-[3rem] leading-[2.8rem] md:text-[3rem] lg:text-[4rem] md:leading-[4rem]">
            Alexander
            <br />
            Heras
          </h1>
          <h2 className="font-bold text-[1.5rem] md:hidden text-[var(--accent-yellow)]">
            Web Developer <br />
          </h2>
          <div className="mx-auto md:mx-0 w-[4rem] lg:w-[8rem] h-1 bg-[var(--accent-yellow)]"></div>
          <div className="mb-[2rem] text-[1rem] lg:mb-[1rem] font-bold lg:text-[1.3rem]">
            <a href="https://www.linkedin.com/in/alexander-heras/" target="_blank" tabIndex={0}>
              LinkedIn
            </a>{" "}
            <span>|</span>{" "}
            <a href="https://github.com/Alekssthlm" target="_blank" tabIndex={0}>
              GitHub
            </a>
          </div>
          <a href="#contact-section"
            className={`border-[3px] ${
              isDarkMode
                ? "border-[var(--accent-yellow)] hover:text-black hover:bg-[var(--accent-yellow)]"
                : "border-[#2d203e] hover:text-white hover:bg-[#2d203e]"
            } md:self-start self-center px-7 py-3 font-bold  hover:scale-[1.05] transition-all ease-in-out duration-300`}
          >
            CONTACT ME
          </a>
        </div>

        
        
        <div className=" lg:max-w-[40%] hidden md:flex flex-col gap-[2.5rem] md:self-end">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold lg:text-[3rem] md:text-[2rem] text-[var(--accent-yellow)]">
              <AnimatedText text="Web Developer </>" delay={1000} />
            </h2>
            
            <p className="text-[1.2rem] italic">
              "I'm passionate about front-end development and ready to embark on
              my journey. Currently pursuing studies at Hyper Island, I've been
              learning by crafting web apps with my skill set and best practices. I invite you
              to explore my portfolio and discover my work."
            </p>
          </div>
          <a href="#projects-section" className="font-bold self-start">
            Explore my projects
          </a>
        </div>
        
      </div>
    </section>
  );
}
