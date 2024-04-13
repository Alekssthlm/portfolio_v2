import { useContext } from "react";
import { ThemeContext } from "../App";

type BadgeProps = {
  text: string
}

export default function Badge( {text}: BadgeProps) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <span className={`${isDarkMode ? "bg-[#000]" : "bg-[#000]"} px-2 py-1 rounded-[5px] text-[0.6rem] align-middle text-white`}>{text.toUpperCase()}</span>
  )
}
