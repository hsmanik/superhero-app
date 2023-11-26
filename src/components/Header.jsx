import { useContext, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
export const Header = () => {
  /* const [toggle, setToggle] = useState(true); */
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className=" ">
      <div className=" grid grid-cols-3 p-2">
        <div className=" ml-2">
          <img src="/vite.svg" alt="logo" />
        </div>
        <div className=" mx-auto ">
          <h1 className=" font-bold text-md md:text-3xl sm:text-xl dark:text-gray-300 font-Poppins">
            Super Hero App
          </h1>
        </div>

        <div className=" flex justify-end items-center mr-2">
          {theme == "light" ? (
            <IoMdMoon
              size={40}
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
              className=" cursor-pointer transition-all duration-500"
            />
          ) : (
            <IoSunny
              size={40}
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
              className=" cursor-pointer transition-all duration-300 text-red-500"
            />
          )}
        </div>
      </div>
      <div className=" flex items-center justify-between max-w-[640px] bg-slate-200 rounded-3xl my-3 pl-1 mx-2 sm:mx-auto">
        <input
          type="text"
          placeholder=" your favorite superhero ?"
          className=" border-none mx-2 bg-inherit outline-none w-full"
        />
        <button
          type="button"
          className="text-black font-bold bg-red-600 hover:bg-red-500  focus:ring-red-900  rounded-3xl text-sm px-5 py-2 text-center me-2  m-1"
        >
          Go!
        </button>
      </div>
    </div>
  );
};
