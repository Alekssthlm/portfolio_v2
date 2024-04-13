import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(document.documentElement.scrollTop);
  const [oldScroll, setOldScroll] = useState(scroll);
  const { isDarkMode } = useContext(ThemeContext);
  const headerEl = document.querySelector("header");

  useEffect(() => {
    function detect() {
      setOldScroll(() => {
        return scroll;
      });
      setScroll(() => {
        return document.documentElement.scrollTop;
      });

      if (scroll >= oldScroll) {
        headerEl?.classList.add("header-hide");
      } else {
        headerEl?.classList.remove("header-hide");
      }
    }
    document.addEventListener("wheel", detect);
    return () => {
      document.removeEventListener("wheel", detect);
    };
  }, [scroll]);

  const navigation = [
    { name: "Introduction", href: "#hero-section" },
    { name: "Stack", href: "#stack-section" },
    { name: "Projects", href: "#projects-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <header
      className={` fixed w-lvw top-0 z-[99] h-20 flex mx-auto md:px-4 ${
        isDarkMode ? "bg-[#262626]" : "bg-white"
      }`}
    >
      <nav
        className="flex items-center justify-between px-4 lg:px-4 flex-1"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#">
            <div className="relative border-solid border-black">
            <span className="font-bold text-[2rem] ">A</span>
            <span className="font-bold text-[2rem] absolute top-[20%] left-[100%]">H<span className="text-[#C77D01]">{"."}</span></span>
            </div>
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`h-7 w-7 ${isDarkMode ? "text-white" : "text-black"}`}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div
          className="hidden md:flex gap-2 items-center"
          aria-label="dark mode toggle"
        >
          <span>{isDarkMode ? <MoonIcon /> : <SunIcon />}</span>
          <SwitchTheme />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className={`${
            isDarkMode
              ? "bg-[var(--primary-dark)]"
              : "bg-[var(--primary-light)]"
          } fixed inset-y-0 right-0 z-50 w-full overflow-y-auto pt-7 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col justify-between`}
        >
          <div>
            <div className="flex items-center justify-between mb-8 px-4">
              <a href="#" className="-m-1.5 p-1.5">
                <span>Alexander</span>
              </a>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-1 flow-root font-semibold">
              <div>
                <div className="space-y-2 py-1 px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isDarkMode ? "bg-[#34343B]" : "bg-gray-200"
            } lg:hidden flex justify-between items-center p-4 font-bold`}
          >
            <span>Theme</span>
            <div
              className="flex justify-end p-2 rounded-[25px] gap-1"
              aria-label="dark mode toggle"
            >
              <span>{isDarkMode ? <MoonIcon /> : <SunIcon />}</span>
              <SwitchTheme />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const MoonIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1.5rem"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5rem"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const SunIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1.5rem"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5rem"
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
