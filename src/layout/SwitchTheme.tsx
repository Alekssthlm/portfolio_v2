import { Fragment, useContext } from "react";
import { Switch } from "@headlessui/react";
import { ThemeContext } from "../App";

export default function SwitchTheme() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch checked={isDarkMode} onChange={toggleTheme} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? "bg-[var(--accent-yellow)]" : "bg-gray-500"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </button>
      )}
    </Switch>
  );
}
