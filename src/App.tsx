import { createContext, useEffect } from "react";
import Header from "./layout/Header";
import SiteLayout from "./layout/SiteLayout";
import useLocalStorage from "./hooks/useLocalStorage.ts";
import Hero from "./layout/Hero.tsx";
import Stack from "./layout/Stack.tsx";
import Projects from "./layout/Projects.tsx";
import Contact from "./layout/Contact.tsx";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("DARKMODE", true);

  function toggleTheme() {
    setIsDarkMode((d: boolean) => !d);
  }

  useEffect(() => {
    let body = document.querySelector("body");
    if (isDarkMode === true) {
      body?.classList.add("body-dark");
      body?.classList.remove("body-light");
    } else {
      body?.classList.add("body-light");
      body?.classList.remove("body-dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <SiteLayout>
        <Header />
        <main>
          <Hero />
          <Projects />
          <Stack />
          <Contact />
        </main>
      </SiteLayout>
    </ThemeContext.Provider>
  );
}

export default App;
