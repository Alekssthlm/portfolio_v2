import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import ContactForm from "../components/ContactForm.tsx";

export default function Contact() {
  const { isDarkMode } = useContext(ThemeContext);
  const [messageSent, setMessageSent] = useState(false);

  return (
    <section id="contact-section"
      className={`text-center py-[4rem] lg:py-[7rem] px-[1rem] flex flex-col gap-8 ${
        isDarkMode ? "bg-[#3c3c3c]" : "bg-[#2d203e]"
      }`}
    >
      <div className="max-w-[80rem] gap-2 m-auto flex flex-col items-center md:gap-4">
        <h2 className="text-[3rem] md:text-[5rem] font-bold text-white">
          CONTACT<span className="text-[#C77D01]">{"."}</span>
        </h2>
        <p className="text-white md:text-justify text-[1.2rem] md:max-w-[40rem] lg:max-w-[50rem]">
          Thank you for visiting my portfolio. If you have any questions or would like to work together, please feel free to contact me through the form below or by emailing me at <a href="mailto:alexander.heras@hyperisland.se" className="text-[#C77D01] hover:text-[#e39104]" title="Click to open your email app!">{" alexander.heras@hyperisland.se"}</a>.
        </p>
      </div>
      {messageSent && (
        <>
        <div className="fixed z-10 top-0 left-0 h-full w-full bg-[#212121b3] flex justify-center items-center" onClick={() => setMessageSent(false)}>
        </div>
          <div className="bg-white p-4 flex text-lg flex-col gap-4 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <p className="text-black">Your message has been sent!</p>
          <button className="px-6 py-1 bg-[#2d203e] text-white self-center" onClick={() => setMessageSent(false)}>BACK</button>
          </div>
        </>
      )}
      <ContactForm setMessageSent={setMessageSent} />
    </section>
  );
}
